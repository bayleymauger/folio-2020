import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

import Scroll from './components/scroll';
import './components/name';
import Cursor from './components/cursor';
import './components/loader';
import Splitting from 'splitting';

Splitting();

var textTransform = 'skewy(0deg) rotate(0deg) translatey(0%) scaley(1)';

document.addEventListener('DOMContentLoaded', () => {
  new Scroll();
  document.body.classList.remove('preload');
});
