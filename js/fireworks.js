/* A finite, transparent celebration. Nothing is allocated until Yes is clicked. */
const celebrationFireworks = (() => {
  const colors = ['#cf9325', '#e5ae20', '#e85396', '#318ccb', '#e77332'];
  const emissionDuration = 6000;
  const tailDuration = 2200;
  let active = null;

  function stop() {
    if (!active) return;
    cancelAnimationFrame(active.frame);
    clearTimeout(active.timer);
    active.events.abort();
    active.particles.length = 0;
    active.sprites.forEach(sprite => {sprite.width = sprite.height = 0;});
    active.sprites.clear();
    active.canvas.remove();
    active.canvas.width = active.canvas.height = 0;
    active = null;
  }

  function spriteFor(colorIndex, shape) {
    const key = `${colorIndex}:${shape}`;
    if (active.sprites.has(key)) return active.sprites.get(key);
    const sprite = document.createElement('canvas');
    sprite.width = sprite.height = 96;
    const ctx = sprite.getContext('2d');
    ctx.scale(2, 2);
    ctx.translate(24, 24);
    const color = colors[colorIndex];
    const glow = ctx.createRadialGradient(0, 0, 1, 0, 0, 15);
    glow.addColorStop(0, color + '90');
    glow.addColorStop(.35, color + '38');
    glow.addColorStop(1, color + '00');
    ctx.fillStyle = glow;
    ctx.fillRect(-24, -24, 48, 48);
    ctx.fillStyle = color;
    ctx.beginPath();
    if (shape === 'heart') {
      ctx.moveTo(0, 7);
      ctx.bezierCurveTo(-13, -1, -7, -11, 0, -5);
      ctx.bezierCurveTo(7, -11, 13, -1, 0, 7);
    } else if (shape === 'star') {
      for (let i = 0; i < 8; i++) {
        const angle = i * Math.PI / 4 - Math.PI / 2;
        const radius = i % 2 ? 2 : 8;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
    } else {
      ctx.arc(0, 0, 3.6, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = .7;
    ctx.stroke();
    if (shape === 'dot') {
      ctx.fillStyle = '#fff4db';
      ctx.beginPath();
      ctx.arc(-.6, -.6, 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
    active.sprites.set(key, sprite);
    return sprite;
  }

  function resize() {
    if (!active) return;
    const previousWidth = active.width || innerWidth;
    const previousHeight = active.height || innerHeight;
    active.width = innerWidth;
    active.height = innerHeight;
    // Respect pixel density while bounding the surface to three million pixels.
    const density = Math.min(devicePixelRatio || 1, 2,
      Math.sqrt(3000000 / (active.width * active.height)));
    active.canvas.width = Math.round(active.width * density);
    active.canvas.height = Math.round(active.height * density);
    active.ctx.setTransform(density, 0, 0, density, 0, 0);
    active.mobile = active.width <= 600;
    active.baseBudget = active.mobile ? 240 : 640;
    for (const particle of active.particles) {
      particle.x *= active.width / previousWidth;
      particle.y *= active.height / previousHeight;
    }
    if (active.reduced) drawReducedCelebration();
  }

  function drawReducedCelebration() {
    const {ctx, width, height} = active;
    ctx.clearRect(0, 0, width, height);
    // A still, airy arrangement instead of moving bursts or flashing light.
    for (const [x, y] of [[.12, .18], [.88, .18], [.12, .76], [.88, .76]]) {
      ctx.globalAlpha = .85;
      ctx.drawImage(spriteFor(2, 'heart'), x * width - 22, y * height - 22, 44, 44);
      for (let i = 0; i < 5; i++) {
        const angle = i * Math.PI * 2 / 5;
        const sx = x * width + Math.cos(angle) * 26;
        const sy = y * height + Math.sin(angle) * 26;
        ctx.globalAlpha = .6;
        ctx.drawImage(spriteFor(0, 'star'), sx - 10, sy - 10, 20, 20);
      }
    }
    ctx.globalAlpha = 1;
  }

  function reduceMotion() {
    if (!active || active.reduced) return;
    cancelAnimationFrame(active.frame);
    active.frame = 0;
    active.reduced = true;
    active.particles.length = 0;
    drawReducedCelebration();
    active.timer = setTimeout(stop, 2200);
  }

  function burst() {
    // Shuffle nine screen regions so early bursts cover the entire viewport.
    if (!active.regions.length) {
      active.regions = Array.from({length: 9}, (_, index) => index);
      for (let i = 8; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [active.regions[i], active.regions[j]] = [active.regions[j], active.regions[i]];
      }
    }
    const region = active.regions.pop();
    const x = active.width * (.15 + (region % 3) * .35 + (Math.random() - .5) * .08);
    const y = active.height * (.15 + Math.floor(region / 3) * .32 + (Math.random() - .5) * .08);
    const large = active.bursts % 3 === 0;
    const radius = Math.min(active.width, active.height) * (large ? .32 : .2);
    const count = Math.round((active.mobile ? (large ? 48 : 32) : (large ? 84 : 54)) * active.quality);
    const available = Math.max(0, Math.floor(active.baseBudget * active.quality) - active.particles.length);
    const colorIndex = active.bursts % colors.length;
    const offset = Math.random() * Math.PI * 2;
    active.bursts++;
    for (let i = 0; i < Math.min(count, available); i++) {
      const angle = offset + i / count * Math.PI * 2 + (Math.random() - .5) * .06;
      const heart = i === 0 && active.bursts % 3 === 1;
      const shape = heart ? 'heart' : i % 8 === 0 ? 'star' : 'dot';
      // Interleaved inner and outer shells give each burst depth instead of a single ring.
      const shell = i < 3 ? .12 : [.5, .85, 1.15][i % 3];
      const speed = radius * (.9 + Math.random() * .6) * shell * (heart ? .65 : 1);
      const tint = heart ? 2 : shape === 'star' ? 0 : Math.random() < .2
        ? Math.floor(Math.random() * colors.length) : colorIndex;
      active.particles.push({
        x, y,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        age: 0, life: 1.25 + Math.random() * .75,
        size: shape === 'dot' ? 2.2 + Math.random() * 1.1
          : shape === 'heart' ? 5.5 + Math.random() : 4 + Math.random() * 1.1,
        rotation: angle, spin: (Math.random() - .5) * 1.2,
        phase: Math.random() * Math.PI * 2,
        color: colors[tint], sprite: spriteFor(tint, shape), shape
      });
    }
  }

  function renderFireworks(now) {
    if (!active || active.reduced) return;
    active.frame = 0;
    const elapsed = now - active.started;
    if (elapsed >= emissionDuration + tailDuration) {stop(); return;}
    const interval = Math.max(0, now - active.previousTime);
    const dt = Math.min(interval / 1000, .04);
    active.previousTime = now;
    active.averageFrame += (interval - active.averageFrame) * .06;
    if (active.averageFrame > 28) active.slowFrames++;
    else active.slowFrames = Math.max(0, active.slowFrames - 1);
    if (active.slowFrames > 25 && active.quality > .45) {
      active.quality = Math.max(.45, active.quality * .8);
      active.slowFrames = 0;
    }
    if (elapsed < emissionDuration && elapsed >= active.nextBurst) {
      burst();
      active.nextBurst = elapsed + (active.bursts <= 3 ? 180 : 220 + Math.random() * 170) / active.quality;
    }
    const {ctx, width, height, particles} = active;
    ctx.clearRect(0, 0, width, height);
    const drag = Math.exp(-1.05 * dt);
    let remaining = 0;
    for (const particle of particles) {
      particle.age += interval / 1000;
      if (particle.age >= particle.life) continue;
      particle.vx = particle.vx * drag + Math.sin(particle.phase + elapsed / 1000) * 5 * dt;
      particle.vy = particle.vy * drag + 58 * dt;
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.rotation += particle.spin * dt;
      const fade = Math.pow(1 - particle.age / particle.life, .85);
      ctx.globalAlpha = fade * .55;
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = particle.size * .65;
      ctx.beginPath();
      ctx.moveTo(particle.x - particle.vx * .065, particle.y - particle.vy * .065);
      ctx.lineTo(particle.x, particle.y);
      ctx.stroke();
      const size = particle.size * 8;
      ctx.globalAlpha = fade * (.88 + Math.sin(elapsed / 350 + particle.phase) * .12);
      if (particle.shape === 'dot') {
        ctx.drawImage(particle.sprite, particle.x - size / 2, particle.y - size / 2, size, size);
      } else {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.drawImage(particle.sprite, -size / 2, -size / 2, size, size);
        ctx.restore();
      }
      particles[remaining++] = particle;
    }
    particles.length = remaining;
    ctx.globalAlpha = 1;
    if (elapsed >= emissionDuration && !remaining) {stop(); return;}
    active.frame = requestAnimationFrame(renderFireworks);
  }

  function start(motionEnabled = true) {
    stop();
    const canvas = document.createElement('canvas');
    canvas.className = 'celebration-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    document.body.append(canvas);
    active = {
      canvas, ctx, particles: [], sprites: new Map(), regions: [],
      events: new AbortController(), frame: 0, timer: 0,
      started: performance.now(), previousTime: performance.now(),
      nextBurst: 0, bursts: 0, quality: 1, averageFrame: 16.7, slowFrames: 0,
      reduced: false, width: 0, height: 0
    };
    resize();
    const options = {signal: active.events.signal};
    window.addEventListener('resize', resize, options);
    window.addEventListener('pagehide', stop, options);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
    }, options);
    if (motionEnabled) active.frame = requestAnimationFrame(renderFireworks);
    else reduceMotion();
  }

  return {start, reduceMotion, stop};
})();
