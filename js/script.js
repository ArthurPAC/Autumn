
/* =====================================================
   1. PHOTOS AND MESSAGES — EDIT HERE
   ===================================================== */

const lembrancas = [
  {foto:'img/foto01.png', formato:'quadrado', mensagem:'This is so old I didnt like block avatars 😭'},
  {foto:'img/foto02.png', formato:'paisagem', mensagem:'First time I gave u flowers I guess? (U had to buy)'},
  {foto:'img/foto03.png', formato:'quadrado', mensagem:'This cyan skin...'},
  {foto:'img/foto04.png', formato:'paisagem', mensagem:'Silly cute us :3'},
  {foto:'img/foto05.png', formato:'paisagem', mensagem:'My BIG HORSE liked you :> (this traitor)'},
  {foto:'img/foto06.png', formato:'circulo', mensagem:'I just liked this to be honest'},
  {foto:'img/foto07.png', formato:'quadrado', mensagem:'U better do... (Just kiding... Or not)'},
  {foto:'img/foto08.png', formato:'retrato', mensagem:'Do u remember us playing bedwars?'},
  {foto:'img/foto09.png', formato:'circulo', mensagem:'U look japanese, I do not >;c'},
  {foto:'img/foto10.png', formato:'paisagem', mensagem:'Got games on ur phone?'},

  {foto:'img/foto11.png', formato:'circulo', mensagem:'We are Pirate Uchiha, fah this is awful..'},
  {foto:'img/foto12.png', formato:'paisagem', mensagem:'Pirates :3 (didnt cook you this time)'},
  {foto:'img/foto13.png', formato:'quadrado', mensagem:'U look like a bad girl'},
  {foto:'img/foto14.png', formato:'paisagem', mensagem:'And Im ngl, I lwk look like a good boy here.. BUT NO, IM A BAD BOY >;C'},
  {foto:'img/foto15.png', formato:'circulo', mensagem:'WHO THE HELL IS THIS GUY?'},
  {foto:'img/foto16.png', formato:'quadrado', mensagem:'We dont talk about this...'},
  {foto:'img/foto17.png', formato:'retrato', mensagem:'I still remember that I slept when u were going to Sweden, I felt so bad 😭'},
  {foto:'img/foto18.png', formato:'retrato', mensagem:'DINO JUMPSCARE'},
  {foto:'img/foto19.png', formato:'paisagem', mensagem:'And talked about Romeo and Juliet FOR TEN MINUTES, LOLL'},
  {foto:'img/foto20.png', formato:'paisagem', mensagem:'We died a lot...'},

  {foto:'img/foto21.png', formato:'paisagem', mensagem:'Im being stabbed, someone help me...'},
  {foto:'img/foto22.png', formato:'retrato', mensagem:'Cute plushie u sent to confort me when I lost my Microsoft Account :3'},
  {foto:'img/foto23.png', formato:'paisagem', mensagem:'WAIT, WE DIDNT FINISH THIS MOVIE'},
  {foto:'img/foto24.png', formato:'retrato', mensagem:'Wait, we really played this game?'},
  {foto:'img/foto25.png', formato:'circulo', mensagem:'Im still handsome even in your low graffics, hehe'},
  {foto:'img/foto26.png', formato:'quadrado', mensagem:'Ehhh... Never mind...'},
  {foto:'img/foto27.png', formato:'retrato', mensagem:'Fate? Ye, must be it, definitely not because of Barney.'},
  {foto:'img/foto28.png', formato:'retrato', mensagem:'We both had coffee at that moment..'},
  {foto:'img/foto29.png', formato:'quadrado', mensagem:'Obsessive spirit?'},
  {foto:'img/foto30.png', formato:'paisagem', mensagem:'DANCEEE'},

  {foto:'img/foto31.png', formato:'quadrado', mensagem:'This is still the group chat photo by the way 😭'},
  {foto:'img/foto32.png', formato:'quadrado', mensagem:'First time matching :D (I still dont know how this bug happened)'},
  {foto:'img/foto33.png', formato:'retrato', mensagem:'Beautiful smoll hands <3'},
  {foto:'img/foto34.png', formato:'circulo', mensagem:'And cute too :3'},
  {foto:'img/foto35.png', formato:'paisagem', mensagem:'And my loyal ray/manta eats yoh head, nom-nom :>'},
  {foto:'img/foto36.png', formato:'circulo', mensagem:'You beats me :<'},
  {foto:'img/foto37.png', formato:'retrato', mensagem:'Aww, look at me, Im cute, right :)?'},
  {foto:'img/foto38.png', formato:'retrato', mensagem:'But you are even more :3'},
  {foto:'img/foto39.png', formato:'circulo', mensagem:'Cutie patootie'},
  {foto:'img/foto40.png', formato:'circulo', mensagem:'Cutie pie '},

  {foto:'img/foto41.png', formato:'paisagem', mensagem:'Welp, yes, we really died a lot 😭'},
  {foto:'img/foto42.png', formato:'quadrado', mensagem:'DINOSHAWR, RAWWRRRR'},
  {foto:'img/foto43.png', formato:'retrato', mensagem:'IT IT WAS HIM, IT WAS THIS ARTHUR, I-IM PRETTY SURE'},
  {foto:'img/foto44.png', formato:'quadrado', mensagem:'This... This wasnt me, okay?'},
  {foto:'img/foto45.png', formato:'quadrado', mensagem:'Heh, look at you 🤗'},
  {foto:'img/foto46.png', formato:'quadrado', mensagem:'And look at ussss <3 (look at our powerful steeds, hehe)'},
  {foto:'img/foto47.png', formato:'paisagem', mensagem:'GAH DAYUM UR TALL'},
  {foto: 'https://media1.tenor.com/m/xfauNZRfX5MAAAAd/funny-cat-bit-video.gif', formato: 'retrato', mensagem: 'BITE >;3'},
  {foto:'img/foto48.png', formato:'paisagem', mensagem:'Of course I didnt forget our best photos :>'},
  {foto:'img/foto49.png', formato:'paisagem', mensagem:'I loved the angel hug btw 🤗'},
  {foto:'img/foto50.png', formato:'paisagem', mensagem:'So perfect...'},
  {foto:'img/foto51.png', formato:'retrato', mensagem:'So mystical...'},
  {foto:'img/foto52.png', formato:'paisagem', mensagem:'Aww, lucky me I got to take this photo :3'},
  {foto:'img/foto53.png', formato:'paisagem', mensagem:'This is just TOO CUTEEEE'}
];

// Formats: quadrado, retrato, paisagem, circulo

/* ===================================================== 
   2. FINAL QUESTION — EDIT HERE
   ===================================================== */
 
const textoDoPedido = 'Will you be my girlfriend?';
const respostaSim = 'I LOVE YOUUUUUUU';

/* =====================================================
   3. ELEMENTS
   ===================================================== */

const memoryRoot = document.querySelector('#memories');
const openBtn = document.querySelector('#open-letter');
const letter = document.querySelector('#letter');
const intro = document.querySelector('#intro');

const yesBtn = document.querySelector('#yes');
const noBtn = document.querySelector('#no');
const choices = document.querySelector('#choices');

const ambient = document.querySelector('.ambient');

let opened = false;
let answered = false;
// Always start enabled; the in-page control is independent of device preferences.
let motionEnabled = true;

/* =====================================================
   4. CREATE PHOTO GALLERY
   ===================================================== */

const FOX_IMAGES = Array.from({length: 5}, (_, i) => `img/fox${i + 1}.png`);
const FOX_RECT_POSITIONS = [
  [0, 0], [1, 0], [0, 1], [1, 1],
  [.5, 0], [.5, 1], [0, .5], [1, .5]
];
const FOX_CIRCLE_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];
const photoDecorations = [];

function shuffleFoxOptions(options) {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle each set of anchors to keep neighbouring photos from all using the same corner.
let rectangularFoxPositions = [];
let circularFoxAngles = [];
function chooseFoxPositions(circular) {
  let pool = circular ? circularFoxAngles : rectangularFoxPositions;
  if (!pool.length) {
    pool = shuffleFoxOptions(circular ? FOX_CIRCLE_ANGLES : FOX_RECT_POSITIONS);
    if (circular) circularFoxAngles = pool;
    else rectangularFoxPositions = pool;
  }
  const first = pool.pop();
  return [first, ...shuffleFoxOptions((circular ? FOX_CIRCLE_ANGLES : FOX_RECT_POSITIONS)
    .filter(position => position !== first))];
}

let foxLayoutFrame = 0;
function scheduleFoxLayout() {
  if (foxLayoutFrame) return;
  foxLayoutFrame = requestAnimationFrame(() => {
    foxLayoutFrame = 0;
    // Measure the resting layout so floating/hover transforms never move or resize a fox.
    memoryRoot.classList.add('photo-measuring');
    try {
      photoDecorations.forEach(positionPhotoFox);
      updatePhotoHoverScales();
    } finally {
      memoryRoot.classList.remove('photo-measuring');
    }
  });
}
const foxResizeObserver = new ResizeObserver(scheduleFoxLayout);

function addPhotoFox(frame, smaller) {
  const fox = document.createElement('img');
  fox.className = 'photo-fox';
  fox.alt = '';
  fox.setAttribute('aria-hidden', 'true');
  fox.draggable = false;
  fox.hidden = true;
  fox.style.setProperty('--fox-rotation', (Math.random() * 10 - 5).toFixed(2) + 'deg');
  const sources = shuffleFoxOptions(FOX_IMAGES);
  let sourceIndex = 0;
  const circular = frame.classList.contains('circulo');
  // The small photo follows another caption on mobile; its upper diagonals have more clearance.
  const candidates = chooseFoxPositions(circular).filter(anchor => !(circular && smaller && anchor === 270));
  const decoration = {frame, fox, smaller, circular, candidates, anchor: null, unavailable: false};
  fox.addEventListener('load', () => {decoration.unavailable = false; scheduleFoxLayout();});
  fox.addEventListener('error', () => {
    // Try the remaining PNGs once; never leave a broken-image icon on the letter.
    fox.hidden = true;
    if (++sourceIndex < sources.length) fox.src = sources[sourceIndex];
    else {decoration.unavailable = true; fox.remove();}
  });
  fox.src = sources[sourceIndex];
  frame.append(fox);
  photoDecorations.push(decoration);
  foxResizeObserver.observe(frame);
}

function placeFoxAtAnchor(decoration, anchor, size) {
  const {frame, fox, circular} = decoration;
  const style = getComputedStyle(frame);
  const width = parseFloat(style.width);
  const height = parseFloat(style.height);
  const borderX = parseFloat(style.borderLeftWidth);
  const borderY = parseFloat(style.borderTopWidth);
  let x, y;
  if (circular) {
    const radians = anchor * Math.PI / 180;
    // Use the rendered diameter and the outer dotted rim, with no fixed pixel coordinates.
    const radius = Math.min(width, height) / 2 + parseFloat(style.outlineWidth) / 2;
    x = width / 2 - borderX + Math.cos(radians) * radius;
    y = height / 2 - borderY + Math.sin(radians) * radius;
  } else {
    x = anchor[0] * width - borderX;
    y = anchor[1] * height - borderY;
    // On the bottom rim, let the fox's feet rest on the border and keep the caption clear.
    if (anchor[1] === 1) y -= size / 2 + 6;
    // In a stacked pair, tuck the upper sticker onto the rim instead of into the previous caption.
    if (anchor[1] === 0 && decoration.smaller && window.innerWidth <= 600) y += size / 2 + 3;
  }
  fox.style.setProperty('--fox-size', size.toFixed(2) + 'px');
  fox.style.left = x.toFixed(2) + 'px';
  fox.style.top = y.toFixed(2) + 'px';
}

function foxPositionIsSafe(decoration) {
  const box = getRestingPhotoRect(decoration.fox);
  const paper = letter.getBoundingClientRect();
  if (box.left < paper.left + 8 || box.right > paper.right - 8) return false;
  const overlaps = (other, gap) => box.left < other.right + gap && box.right > other.left - gap &&
    box.top < other.bottom + gap && box.bottom > other.top - gap;
  for (const other of photoDecorations) {
    if (other !== decoration && overlaps(getRestingPhotoRect(other.frame), 6)) return false;
    if (other !== decoration && !other.fox.hidden && overlaps(getRestingPhotoRect(other.fox), 4)) return false;
    const caption = other.frame.closest('.memory-item')?.querySelector('.memory-caption');
    // Reserve space for the captions' existing floating and cursor repulsion.
    if (caption && overlaps(caption.getBoundingClientRect(), 16)) return false;
  }
  return true;
}

function positionPhotoFox(decoration) {
  if (decoration.unavailable || !decoration.frame.isConnected) return;
  const width = parseFloat(getComputedStyle(decoration.frame).width);
  const maxSize = decoration.circular ? 45 : decoration.smaller ? 42 : 56;
  const size = Math.max(14, Math.min(maxSize, width * (decoration.smaller ? .22 : .19)));
  const anchors = decoration.anchor === null ? decoration.candidates : [decoration.anchor];
  // Only the first layout selects an anchor. Resizing changes coordinates and scale, not the pose.
  decoration.fox.hidden = false;
  for (let fittedSize = size; fittedSize >= 10; fittedSize -= 2) {
    for (const anchor of anchors) {
      placeFoxAtAnchor(decoration, anchor, fittedSize);
      if (foxPositionIsSafe(decoration)) {
        decoration.anchor = anchor;
        decoration.fox.hidden = !decoration.fox.complete || !decoration.fox.naturalWidth;
        return;
      }
    }
  }
  // An extremely narrow viewport should hide an ornament rather than clip it or cover a message.
  decoration.fox.hidden = true;
}

function getRestingPhotoRect(element) {
  const bounds = element.getBoundingClientRect();
  const motion = element.closest('.photo-motion');
  if (!motion || !memoryRoot.classList.contains('photo-measuring')) return bounds;
  const transform = getComputedStyle(motion).transform;
  const scale = transform === 'none' ? 1 : new DOMMatrixReadOnly(transform).a;
  if (scale === 1) return bounds;
  const parent = motion.getBoundingClientRect();
  const originX = parent.left + parent.width / 2;
  const originY = parent.top + parent.height * .9;
  // Undo the parent's zoom mathematically; its live transition is never interrupted.
  const left = originX + (bounds.left - originX) / scale;
  const right = originX + (bounds.right - originX) / scale;
  const top = originY + (bounds.top - originY) / scale;
  const bottom = originY + (bounds.bottom - originY) / scale;
  return {left, right, top, bottom, width: right - left, height: bottom - top};
}

function wrapPhotoMotion(frame, index) {
  const motion = document.createElement('div');
  motion.className = 'photo-motion';
  const floating = document.createElement('div');
  floating.className = 'photo-float';
  // Stable variations do not consume random numbers used by the existing fox selection.
  floating.style.setProperty('--photo-duration', (8.5 + (index * 17 % 37) / 10) + 's');
  floating.style.setProperty('--photo-delay', (-index * 1.37 - .6).toFixed(2) + 's');
  floating.style.setProperty('--photo-travel-x', (1 + index * 7 % 3) + 'px');
  floating.style.setProperty('--photo-travel-y', (3.6 + (index * 11 % 25) / 10).toFixed(1) + 'px');
  floating.style.setProperty('--photo-turn', (.7 + (index * 13 % 4) / 10).toFixed(1) + 'deg');
  floating.append(frame);
  motion.append(floating);
  // Touch on hybrid devices must not leave a mouse-hover zoom stuck on the photograph.
  for (const type of ['pointerenter', 'pointerdown', 'pointermove']) {
    motion.addEventListener(type, event => {
      motion.classList.toggle('photo-touch', event.pointerType === 'touch');
    }, {passive: true});
  }
  return motion;
}

function updatePhotoHoverScales() {
  const paper = letter.getBoundingClientRect();
  const captions = [...memoryRoot.querySelectorAll('.memory-caption')].map(el => el.getBoundingClientRect());
  for (const {frame, fox} of photoDecorations) {
    const motion = frame.closest('.photo-motion');
    if (!motion) continue;
    const base = getRestingPhotoRect(motion);
    const rim = getRestingPhotoRect(frame);
    const sticker = !fox.hidden && fox.isConnected ? getRestingPhotoRect(fox) : rim;
    const centerX = base.left + base.width / 2;
    const originY = base.top + base.height * .9;
    // Include the outline and reserve room for the full floating translation and rotation.
    const left = Math.min(rim.left - 5, sticker.left);
    const right = Math.max(rim.right + 5, sticker.right);
    const top = Math.min(rim.top - 5, sticker.top);
    const bottom = Math.max(rim.bottom + 5, sticker.bottom);
    const motionMargin = 6;
    let scale = window.innerWidth <= 600 ? 1.05 : 1.1;
    scale = Math.min(scale,
      (centerX - paper.left - 4 - motionMargin) / Math.max(1, centerX - left),
      (paper.right - centerX - 4 - motionMargin) / Math.max(1, right - centerX));
    for (const caption of captions) {
      if (caption.right < left - 20 || caption.left > right + 20) continue;
      if (caption.top >= rim.bottom) {
        // The lower zoom origin leaves the caption in place; its line-height also provides breathing room.
        scale = Math.min(scale, (caption.top - 1 - originY) / Math.max(1, bottom - originY));
      } else if (caption.bottom <= rim.top) {
        scale = Math.min(scale, (originY - caption.bottom - 3 - motionMargin) / Math.max(1, originY - top));
      }
    }
    motion.style.setProperty('--photo-hover-scale', Math.max(1, scale).toFixed(4));
  }
}

for (let i = 0; i < lembrancas.length; i += 2) {
  const group = document.createElement('div');
  group.className = `memory-pair ${((i / 2) % 2) ? 'reverse' : ''}`;

  lembrancas.slice(i, i + 2).forEach((item, n) => {
    const block = document.createElement('section');
    block.className = `memory-item ${n === 0 ? 'larger' : 'smaller'}`;

    const photo = document.createElement('div');
    photo.className = `photo-frame ${item.formato}`;

    const img = document.createElement('img');
    img.src = item.foto;
    img.alt = `Memory ${i + n + 1}`;
    img.loading = 'lazy';

    img.addEventListener('load', updateLetterHeight);
    img.addEventListener('error', () => {
      img.alt = `Photo not found: ${item.foto}`;
    });

    photo.append(img);
    addPhotoFox(photo, n !== 0);
    block.append(wrapPhotoMotion(photo, i + n));

    if (item.mensagem) {
      const msg = document.createElement('p');
      msg.className = 'magic-text memory-caption';
      msg.textContent = item.mensagem;
      block.append(msg);
    }

    group.append(block);
  });

  memoryRoot.append(group);
}

window.addEventListener('resize', scheduleFoxLayout);
if (document.fonts) document.fonts.ready.then(scheduleFoxLayout);

document.querySelector('#proposal-text').textContent = textoDoPedido;

/* =====================================================
   5. MAGIC LETTERS — SETTINGS
   ===================================================== */

// Lower values = more readable text.
// Higher values = stronger movements.

const MAGIC_SETTINGS = {
  smallFloatX: 0.7,
  smallFloatY: 1.2,

  bigFloatX: 1.6,
  bigFloatY: 2.4,

  smallPush: 12,
  bigPush: 22,

  smallReach: 105,
  bigReach: 145,

  springStrength: 0.09,
  friction: 0.79
};

const magicLetters = [];

const pointer = {
  x: -10000,
  y: -10000,
  active: false
};

function createMagicText(element) {
  const text =
    element.getAttribute('data-original') ||
    element.textContent;

  element.setAttribute('data-original', text);
  element.setAttribute('aria-label', text);
  element.replaceChildren();

  // Keep words together when wrapping.
  const words = text.split(/(\s+)/);

  words.forEach(wordText => {
    if (!wordText) return;

    if (/^\s+$/.test(wordText)) {
      element.append(document.createTextNode(wordText));
      return;
    }

    const word = document.createElement('span');
    word.className = 'magic-word';
    word.style.display = 'inline-block';
    word.style.whiteSpace = 'nowrap';

    for (const char of wordText) {
      const span = document.createElement('span');

      span.className = 'magic-letter';
      span.textContent = char;
      span.setAttribute('aria-hidden', 'true');

      word.append(span);

      magicLetters.push({
        el: span,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        seed: Math.random() * Math.PI * 2,
        speed: 0.65 + Math.random() * 0.8
      });
    }

    element.append(word);
  });
}

function rebuildMagicTexts() {
  magicLetters.length = 0;

  document.querySelectorAll('.magic-text')
    .forEach(createMagicText);
}

rebuildMagicTexts();

document.addEventListener('pointermove', event => {
  if (event.pointerType === 'touch') return;

  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.active = true;
}, {passive: true});

document.documentElement.addEventListener('pointerleave', () => {
  pointer.active = false;
});

window.addEventListener('blur', () => {
  pointer.active = false;
});

/* =====================================================
   6. ANIMATE MAGIC LETTERS
   ===================================================== */

let magicAnimationFrame = 0;

function animateMagicLetters(time) {
  magicAnimationFrame = 0;
  if (!motionEnabled) return;
  if (opened && !document.hidden) {
    const seconds = time / 1000;

    for (const item of magicLetters) {
      const rect = item.el.getBoundingClientRect();

      if (
        rect.bottom < -50 ||
        rect.top > window.innerHeight + 50
      ) {
        continue;
      }

      // Stable position without the letter displacement.
      const centerX = rect.left + rect.width / 2 - item.x;
      const centerY = rect.top + rect.height / 2 - item.y;

      const parent = item.el.closest('.magic-text');

      const isBig = parent?.classList.contains('big');

      const phase = seconds * item.speed + item.seed;

      // Very subtle floating when the mouse is away.
      const floatX =
        Math.sin(phase * 1.3) *
        (isBig ? MAGIC_SETTINGS.bigFloatX : MAGIC_SETTINGS.smallFloatX);

      const floatY =
        Math.cos(phase * 1.2) *
        (isBig ? MAGIC_SETTINGS.bigFloatY : MAGIC_SETTINGS.smallFloatY);

      let pushX = 0;
      let pushY = 0;

      if (pointer.active) {
        const dx = centerX - pointer.x;
        const dy = centerY - pointer.y;

        const distance = Math.hypot(dx, dy);

        const reach = isBig
          ? MAGIC_SETTINGS.bigReach
          : MAGIC_SETTINGS.smallReach;

        const maxPush = isBig
          ? MAGIC_SETTINGS.bigPush
          : MAGIC_SETTINGS.smallPush;

        if (distance < reach) {
          const force = Math.pow(1 - distance / reach, 1.5);

          const angle = Math.atan2(dy, dx);

          pushX = Math.cos(angle) * maxPush * force;
          pushY = Math.sin(angle) * maxPush * force;
        }
      }

      const targetX = floatX + pushX;
      const targetY = floatY + pushY;

      item.vx +=
        (targetX - item.x) * MAGIC_SETTINGS.springStrength;

      item.vy +=
        (targetY - item.y) * MAGIC_SETTINGS.springStrength;

      item.vx *= MAGIC_SETTINGS.friction;
      item.vy *= MAGIC_SETTINGS.friction;

      item.x += item.vx;
      item.y += item.vy;

      const rotation =
        Math.sin(phase * 0.8) * (isBig ? 1.8 : 0.65);

      item.el.style.transform =
        `translate3d(${item.x}px, ${item.y}px, 0)
         rotate(${rotation}deg)`;
    }
  }

  magicAnimationFrame = requestAnimationFrame(animateMagicLetters);
}

magicAnimationFrame = requestAnimationFrame(animateMagicLetters);

/* =====================================================
   7. FALLING AUTUMN LEAVES — FULL BACKGROUND
   ===================================================== */

const LEAF_IMAGE = 'img/falling-leaf.png';
const TOTAL_LEAVES = 22;

const fallingLeaves = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFallingLeaf(index) {
  if (!ambient) return;

  const leaf = document.createElement('img');

  leaf.src = LEAF_IMAGE;
  leaf.alt = '';
  leaf.draggable = false;
  leaf.className = 'autumn-fall-img';

  const size = random(20, 46);

  Object.assign(leaf.style, {
    position: 'fixed',
    display: 'block',
    width: `${size}px`,
    height: 'auto',
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none',
    zIndex: '0',
    transformOrigin: 'center center',
    willChange: 'transform, opacity',
    filter: 'drop-shadow(0 3px 4px rgba(110,65,30,.13))'
  });

  ambient.append(leaf);
  fallingLeaves.push(leaf);

  const width = window.innerWidth;
  const height = window.innerHeight;

  const safeWidth = Math.max(0, width - size - 10);

  const baseX = random(0, safeWidth);
  const wind = random(18, 65);
  const direction = Math.random() < 0.5 ? -1 : 1;

  const clampX = value =>
    Math.max(0, Math.min(safeWidth, value));

  const x0 = baseX;
  const x1 = clampX(baseX + wind * direction);
  const x2 = clampX(baseX - wind * direction * 0.65);
  const x3 = clampX(baseX + wind * direction * 0.85);
  const x4 = clampX(baseX - wind * direction * 0.35);

  const startRotation = random(-70, 70);
  const rotationAmount = random(260, 620) * direction;

  const duration = random(11000, 19000);

  const keyframes = [
    {
      offset: 0,
      transform: `translate3d(${x0}px, -90px, 0) rotate(${startRotation}deg)`,
      opacity: 0
    },
    {
      offset: 0.10,
      transform: `translate3d(${x1}px, ${height * 0.12}px, 0) rotate(${startRotation + rotationAmount * 0.15}deg)`,
      opacity: 0.9
    },
    {
      offset: 0.32,
      transform: `translate3d(${x2}px, ${height * 0.34}px, 0) rotate(${startRotation + rotationAmount * 0.36}deg)`,
      opacity: 0.88
    },
    {
      offset: 0.56,
      transform: `translate3d(${x3}px, ${height * 0.58}px, 0) rotate(${startRotation + rotationAmount * 0.62}deg)`,
      opacity: 0.82
    },
    {
      offset: 0.82,
      transform: `translate3d(${x4}px, ${height * 0.84}px, 0) rotate(${startRotation + rotationAmount * 0.86}deg)`,
      opacity: 0.72
    },
    {
      offset: 1,
      transform: `translate3d(${x1}px, ${height + 100}px, 0) rotate(${startRotation + rotationAmount}deg)`,
      opacity: 0
    }
  ];

  const animation = leaf.animate(keyframes, {
    duration,
    iterations: Infinity,
    easing: 'linear',
    fill: 'both'
  });

  // Start each leaf at a different point in the animation.
  animation.currentTime =
    ((index + Math.random() * 0.8) / TOTAL_LEAVES) * duration;
  if (!motionEnabled || document.hidden) animation.pause();
}

function startFallingLeaves() {
  stopFallingLeaves();

  for (let i = 0; i < TOTAL_LEAVES; i++) {
    createFallingLeaf(i);
  }
}

function stopFallingLeaves() {
  fallingLeaves.forEach(leaf => {
    leaf.getAnimations().forEach(animation => animation.cancel());
    leaf.remove();
  });

  fallingLeaves.length = 0;
}

/* =====================================================
   8. LETTER OPENING
   ===================================================== */

function updateLetterHeight() {
  if (!opened) return;

  letter.style.setProperty(
    '--letter-height',
    `${letter.scrollHeight + 80}px`
  );
}

openBtn.addEventListener('click', () => {
  if (opened) return;

  opened = true;

  letter.style.setProperty(
    '--letter-height',
    `${letter.scrollHeight + 80}px`
  );

  document.body.classList.add('opened');

  letter.setAttribute('aria-hidden', 'false');
  letter.inert = false;

  intro.setAttribute('aria-hidden', 'true');
  openBtn.disabled = true;

  startFallingLeaves();

  setTimeout(() => {
    letter.scrollIntoView({
      behavior: motionEnabled ? 'smooth' : 'instant',
      block: 'start'
    });
  }, 700);

  setTimeout(updateLetterHeight, 2600);
});

letter.inert = true;

/* =====================================================
   9. NO BUTTON RUNNING AWAY
   ===================================================== */

let noMoving = false;

function moveNo() {
  if (!motionEnabled || !opened || answered || noMoving) return;

  const area = choices.getBoundingClientRect();

  const width = noBtn.offsetWidth;
  const height = noBtn.offsetHeight;

  const maxX = area.width - width - 16;
  const maxY = area.height - height - 16;

  if (maxX <= 10 || maxY <= 10) return;

  noMoving = true;

  const yesRect = yesBtn.getBoundingClientRect();

  let x = 8;
  let y = 8;

  for (let attempt = 0; attempt < 25; attempt++) {
    x = random(8, maxX);
    y = random(8, maxY);

    const nextLeft = area.left + x;
    const nextTop = area.top + y;

    const overlap =
      nextLeft < yesRect.right + 15 &&
      nextLeft + width > yesRect.left - 15 &&
      nextTop < yesRect.bottom + 15 &&
      nextTop + height > yesRect.top - 15;

    if (!overlap) break;
  }

  noBtn.style.transition =
    'left .35s ease, top .35s ease';

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  setTimeout(() => {
    noMoving = false;
  }, 380);
}

document.addEventListener('pointermove', event => {
  if (!opened || answered) return;
  if (event.pointerType === 'touch') return;

  const rect = noBtn.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const distance = Math.hypot(
    event.clientX - centerX,
    event.clientY - centerY
  );

  if (distance < 90) moveNo();
}, {passive: true});

noBtn.addEventListener('pointerenter', moveNo);

noBtn.addEventListener('pointerdown', event => {
  if (event.pointerType === 'touch') {
    event.preventDefault();
    moveNo();
  }
});

noBtn.addEventListener('click', event => {
  event.preventDefault();
  moveNo();
});

/* =====================================================
   10. YES BUTTON
   ===================================================== */

yesBtn.addEventListener('click', () => {
  if (answered) return;

  answered = true;
  choices.classList.add('celebrating');

  document.querySelector('#answer').textContent =
    respostaSim;

  noBtn.hidden = true;

  yesBtn.setAttribute('data-original', 'YAAAYYY!!');
  rebuildMagicTexts();

  updateLetterHeight();
  celebrationFireworks.start(motionEnabled);
});

/* =====================================================
   11. RESPONSIVENESS
   ===================================================== */

let resizeTimer;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    if (!opened) return;

    updateLetterHeight();
    startFallingLeaves();
  }, 250);
});

if (document.fonts) {
  document.fonts.ready.then(updateLetterHeight);
}

letter.addEventListener('transitionend', event => {
  if (event.propertyName === 'max-height') {
    updateLetterHeight();
  }
});

function syncLeafMotion() {
  fallingLeaves.forEach(leaf => {
    leaf.getAnimations().forEach(animation => {
      if (!motionEnabled || document.hidden) {
        animation.pause();
      } else {
        animation.play();
      }
    });
  });
}

document.addEventListener('visibilitychange', syncLeafMotion);

/* =====================================================
   12. OPTIONAL IN-PAGE MOTION CONTROL
   ===================================================== */

const motionToggle = document.querySelector('#toggle-motion');

motionToggle.addEventListener('click', () => {
  motionEnabled = !motionEnabled;
  document.documentElement.classList.toggle('motion-paused', !motionEnabled);
  motionToggle.setAttribute('aria-pressed', String(!motionEnabled));
  motionToggle.textContent = motionEnabled ? 'Pause motion' : 'Resume motion';
  motionToggle.title = motionEnabled
    ? 'Pause animations and moving interactions'
    : 'Resume animations and moving interactions';
  pointer.active = false;

  if (motionEnabled) {
    if (!magicAnimationFrame) magicAnimationFrame = requestAnimationFrame(animateMagicLetters);
  } else {
    celebrationFireworks.reduceMotion();
    cancelAnimationFrame(magicAnimationFrame);
    magicAnimationFrame = 0;
    // Keep every word readable and still, including a message rebuilt after clicking Yes.
    for (const item of magicLetters) {
      item.x = item.y = item.vx = item.vy = 0;
      item.el.style.transform = 'none';
    }
  }
  syncLeafMotion();
});
