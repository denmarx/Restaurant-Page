function createHeader() {
  const header = document.createElement('header');
  return header;
}

function createNavbar() {
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'navbar');

  const navContainer = document.createElement('div');
  navContainer.classList.add('container');

  const ul = document.createElement('ul');

  const homeList = document.createElement('li');
  const aboutList = document.createElement('li');
  const contactList = document.createElement('li');

  const homeLink = document.createElement('a');
  // homeLink.classList.add('current');
  homeLink.setAttribute('id', 'home');
  homeLink.textContent = 'Home';

  const aboutLink = document.createElement('a');
  aboutLink.setAttribute('id', 'about');
  aboutLink.textContent = 'About';

  const contactLink = document.createElement('a');
  contactLink.setAttribute('id', 'contact');
  contactLink.textContent = 'Contact';

  homeList.appendChild(homeLink);
  aboutList.appendChild(aboutLink);
  contactList.appendChild(contactLink);

  ul.appendChild(homeList);
  ul.appendChild(aboutList);
  ul.appendChild(contactList);

  navContainer.appendChild(ul);

  const logoHeading = document.createElement('h1');
  const logoLink = document.createElement('a');
  logoLink.setAttribute('href', 'index.html');
  logoLink.textContent = 'HBT';

  logoHeading.appendChild(logoLink);
  navContainer.appendChild(logoHeading);

  nav.appendChild(navContainer);

  return nav;
}

function loadInit() {
  const content = document.querySelector('#content');
  // const tabContent = document.createElement('div');
  // tabContent.setAttribute('id', 'tab-content');
  const header = createHeader();
  const navbar = createNavbar();
  header.appendChild(navbar);
  content.appendChild(header);
}

export default loadInit;
