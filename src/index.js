import loadInit from './modules/loadInit';
import loadHome from './modules/loadHome';
import loadAbout from './modules/about';

init();

function addNavEvents() {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('about');
  const contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadAbout);
}

function init() {
  loadInit();
  loadHome();
  addNavEvents();
}
