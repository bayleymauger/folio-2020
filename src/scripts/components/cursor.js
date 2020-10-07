class Cursor {
  constructor() {
    this.bindMethods();

    this.el = document.querySelector('.c-cursor');

    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.cursorX = this.x;
    this.cursorY = this.y;

    this.rAF = undefined;

    this.lerp = 0.3;

    this.addEvents();
  }

  bindMethods() {
    ['setPos', 'changeCursor', 'run'].forEach(fn => (this[fn] = this[fn].bind(this)));
  }

  run() {
    this.cursorX += (this.x - this.cursorX) * this.lerp;
    this.cursorY += (this.y - this.cursorY) * this.lerp;

    this.el.style.transform = `translate3d(${this.cursorX}px, ${this.cursorY}px, 0px)`;

    this.requestAnimationFrame();
  }

  requestAnimationFrame() {
    this.rAF = requestAnimationFrame(this.run);
  }

  cancelAnimationFrame() {
    this.cancelAnimationFrame(this.rAF);
  }

  setPos(e) {
    this.x = e.pageX - 100;
    this.y = e.pageY - 50;
  }

  changeCursor(e) {
    if (e.target.tagName === 'A' || e.target.classList.contains('c-deck__img')) {
      this.el.classList.add('is-hover');
    } else {
      this.el.classList.remove('is-hover');
    }
  }

  addEvents() {
    this.run();

    window.addEventListener('mousemove', this.setPos);
    window.addEventListener('mouseover', this.changeCursor);
  }
}

export default Cursor;
