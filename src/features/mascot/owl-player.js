/** Owl animation controller. No dependencies, network requests, or tracking. */
export const OWL_ANIMATIONS = {
  blink: { key: 'parpadeo', durations: [100, 65, 85, 65, 65, 180] },
  wave: { key: 'saludo', durations: [120, 100, 180, 160, 110, 160] },
  flap: { key: 'aleteo', durations: [100, 80, 100, 100, 80, 120] },
};

export class OwlPlayer {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) throw new Error('Canvas 2D no disponible.');
    this.options = { baseUrl: '.', followPointer: false, parallax: true, automatic: true,
      background: 'night', speed: 1, size: 280, ...options };
    this.assets = {}; this.ready = false; this.paused = false; this.destroyed = false;
    this.action = 'idle'; this.elapsed = 0; this.time = 0; this.lastTime = 0;
    this.pointer = { x: 0, y: 0 }; this.smooth = { x: 0, y: 0 }; this.pointerInside = false;
    this.nextBlink = 2400; this.nextWave = 12000;
    this.motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
    this.reduced = this.motionQuery.matches;
    this.onMotion = e => { this.reduced = e.matches; };
    this.motionQuery.addEventListener('change', this.onMotion);
    this.onPointer = e => {
      const r = canvas.getBoundingClientRect();
      this.pointer.x = Math.max(-1, Math.min(1, (e.clientX - r.left) / r.width * 2 - 1));
      this.pointer.y = Math.max(-1, Math.min(1, (e.clientY - r.top) / r.height * 2 - 1));
      this.pointerInside = true;
    };
    this.onLeave = () => { this.pointerInside = false; this.pointer.x = 0; this.pointer.y = 0; };
    this.onClick = e => { this.onPointer(e); this.play(this.options.followPointer ? 'flap' : 'wave'); };
    this.onKey = e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.play('wave'); }
    };
    canvas.addEventListener('pointermove', this.onPointer);
    canvas.addEventListener('pointerleave', this.onLeave);
    canvas.addEventListener('pointerdown', this.onClick);
    canvas.addEventListener('keydown', this.onKey);
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas);
    this.stars = Array.from({ length: 55 }, (_, i) => ({
      x: ((i * 173 + 29) % 997) / 997,
      y: ((i * 97 + 11) % 499) / 499 * .7,
      size: i % 7 === 0 ? 2 : 1,
      phase: i * 2.1,
    }));
    this.tick = stamp => {
      if (this.destroyed) return;
      const dt = this.lastTime ? Math.min(stamp - this.lastTime, 64) : 0;
      this.lastTime = stamp;
      if (!this.paused) this.update(dt);
      this.draw();
      this.raf = requestAnimationFrame(this.tick);
    };
    this.resize();
    this.loadPromise = this.load();
    this.raf = requestAnimationFrame(this.tick);
  }

  async load() {
    const sources = {
      idle: 'assets/sprites/reposo.png', blink: 'assets/sprites/parpadeo.png',
      wave: 'assets/sprites/saludo.png', flap: 'assets/sprites/aleteo.png',
      forest: 'assets/backgrounds/bosque-luna.webp',
      foreground: 'assets/backgrounds/paisaje-inferior.webp',
      desk: 'assets/backgrounds/escritorio.webp',
    };
    await Promise.all(Object.entries(sources).map(async ([key, path]) => {
      const img = new Image();
      await new Promise((resolve, reject) => {
        img.onload = resolve; img.onerror = () => reject(new Error(`No se pudo cargar ${path}`));
        img.src = this.options.sources?.[key] || `${this.options.baseUrl.replace(/\/$/, '')}/${path}`;
      });
      if (!this.destroyed) this.assets[key] = img;
    }));
    if (this.destroyed) return;
    this.ready = true;
    this.options.onReady?.();
  }

  resize() {
    const r = this.canvas.getBoundingClientRect();
    this.width = Math.max(1, r.width); this.height = Math.max(1, r.height);
    const dpr = Math.min(devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(this.width * dpr);
    this.canvas.height = Math.round(this.height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  play(action) {
    if (!['idle', 'blink', 'wave', 'flap', 'jump', 'celebrate'].includes(action)) {
      throw new Error(`Acción desconocida: ${action}`);
    }
    this.action = action; this.elapsed = 0;
    this.options.onAction?.(action);
    return this;
  }

  pause(value = true) { this.paused = value; return this; }
  setOptions(options) { Object.assign(this.options, options); return this; }

  update(dt) {
    if (!this.ready) return;
    const scaled = dt * Math.max(.25, Math.min(3, this.options.speed));
    this.time += scaled;
    const weight = 1 - Math.exp(-dt / 150);
    const tx = this.reduced ? 0 : this.pointer.x;
    const ty = this.reduced ? 0 : this.pointer.y;
    this.smooth.x += (tx - this.smooth.x) * weight;
    this.smooth.y += (ty - this.smooth.y) * weight;
    if (this.action !== 'idle') {
      this.elapsed += scaled;
      const state = OWL_ANIMATIONS[this.action];
      const duration = state ? state.durations.reduce((a, b) => a + b, 0)
        : this.action === 'jump' ? 780 : 1800;
      if (this.elapsed >= duration) {
        const ended = this.action;
        this.play('idle'); this.nextBlink = this.time + 2300;
        this.options.onEnd?.(ended);
      }
    } else if (this.options.automatic && !this.reduced) {
      if (this.time >= this.nextWave) {
        this.nextWave = this.time + 16000; this.play('wave');
      } else if (this.time >= this.nextBlink) {
        this.nextBlink = this.time + 3200; this.play('blink');
      }
    }
  }

  frameAt(action, elapsed) {
    const def = OWL_ANIMATIONS[action];
    if (!def) return 0;
    let remaining = elapsed;
    for (let i = 0; i < def.durations.length; i++) {
      if (remaining < def.durations[i]) return i;
      remaining -= def.durations[i];
    }
    return 5;
  }

  draw() {
    const c = this.ctx, w = this.width, h = this.height;
    c.clearRect(0, 0, w, h);
    const g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#090d1b'); g.addColorStop(.65, '#11122e'); g.addColorStop(1, '#090c16');
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    const moving = !this.reduced;
    const px = this.options.parallax && moving ? this.smooth.x : 0;
    const py = this.options.parallax && moving ? this.smooth.y : 0;
    const glow = c.createRadialGradient(w * .52, h * .42, 10, w * .52, h * .42, w * .52);
    glow.addColorStop(0, '#5725a927'); glow.addColorStop(1, '#5725a900');
    c.fillStyle = glow; c.fillRect(0, 0, w, h);
    for (const s of this.stars) {
      c.globalAlpha = moving ? .35 + .45 * (.5 + .5 * Math.sin(this.time / 1400 + s.phase)) : .65;
      c.fillStyle = s.size === 2 ? '#d89bff' : '#c8e5ff';
      const x = s.x * w - px * 5, y = s.y * h - py * 4;
      c.fillRect(Math.round(x), Math.round(y), s.size, s.size);
      if (s.size === 2) { c.fillRect(Math.round(x - 2), Math.round(y + .5), 6, 1); }
    }
    c.globalAlpha = 1;
    if (!this.ready) {
      c.font = '14px monospace'; c.fillStyle = '#a9aac1';
      c.textAlign = 'center'; c.fillText('Preparando el escenario…', w / 2, h / 2); return;
    }
    const background = this.options.background === 'desk' ? this.assets.desk : this.assets.forest;
    const bw = this.options.background === 'desk' ? Math.min(w * .86, 770) : Math.max(w * .86, 600);
    const bh = bw * background.height / background.width;
    c.globalAlpha = this.options.background === 'desk' ? .85 : .76;
    c.drawImage(background, w - bw + 30 - px * 12, h - bh + 25 - py * 6, bw, bh);
    c.globalAlpha = 1;
    const foreground = this.assets.foreground;
    const fw = Math.max(w + 80, 780), fh = fw * foreground.height / foreground.width;
    c.drawImage(foreground, (w - fw) / 2 - px * 22, h - fh + 35 - py * 9, fw, fh);
    const size = Math.min(this.options.size, w * .51, h * .60);
    const follow = this.options.followPointer && this.pointerInside && moving;
    const x = w * .37 + (follow ? this.smooth.x * Math.max(0, w * .31 - size * .18) : px * 9);
    const y = h * .72 + (follow ? this.smooth.y * h * .21 : 0);
    let action = this.action, elapsed = this.elapsed;
    let jump = 0, turn = moving ? this.smooth.x * .065 : 0;
    if (action === 'jump') {
      jump = moving ? Math.sin(Math.min(elapsed / 780, 1) * Math.PI) * 64 : 0; action = 'idle';
    } else if (action === 'celebrate') {
      action = 'flap'; elapsed %= 580;
      if (moving) { jump = Math.abs(Math.sin(this.elapsed / 230)) * 22; turn += Math.sin(this.elapsed / 100) * .06; }
    }
    const frame = this.reduced ? 0 : this.frameAt(action, elapsed);
    const atlas = this.assets[action] || this.assets.idle;
    const bob = moving && this.action === 'idle' ? Math.sin(this.time / 750) * 2.3 : 0;
    c.save(); c.translate(x, y - jump + bob); c.rotate(turn);
    c.imageSmoothingEnabled = true;
    c.drawImage(atlas, atlas === this.assets.idle ? 0 : frame * 256, 0, 256, 256, -size / 2, -size * .89, size, size);
    c.restore();
    if (this.action === 'celebrate' && moving) {
      for (let i = 0; i < 16; i++) {
        const t = ((this.elapsed + i * 71) % 1000) / 1000;
        const angle = i * 2.4;
        c.globalAlpha = 1 - t; c.fillStyle = i % 2 ? '#00e5ed' : '#e58af6';
        c.fillRect(x + Math.cos(angle) * t * 125, y - size * .55 + Math.sin(angle) * t * 85 - t * 30, 3, 3);
      }
      c.globalAlpha = 1;
    }
  }

  destroy() {
    this.destroyed = true; cancelAnimationFrame(this.raf);
    this.resizeObserver.disconnect();
    this.motionQuery.removeEventListener('change', this.onMotion);
    this.canvas.removeEventListener('pointermove', this.onPointer);
    this.canvas.removeEventListener('pointerleave', this.onLeave);
    this.canvas.removeEventListener('pointerdown', this.onClick);
    this.canvas.removeEventListener('keydown', this.onKey);
  }
}
