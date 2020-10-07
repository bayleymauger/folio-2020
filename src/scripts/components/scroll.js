import LocomotiveScroll from 'locomotive-scroll';

class Scroll {
  constructor() {
    this.init();
  }

  test() {
    console.log('test');
  }

  init() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('main'),
      smooth: true
    });

    this.scroll.on('call', e => {
      console.log(e);
    });
  }
}

export default Scroll;
