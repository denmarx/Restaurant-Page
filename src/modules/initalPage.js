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
  homeLink.classList.add('current');
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

function createClear() {
  const clearDiv = document.createElement('div');
  clearDiv.classList.add('clr');

  return clearDiv;
}

function createFooter() {
  const footer = document.createElement('div');
  footer.setAttribute('id', 'main-footer');

  return footer;
}

function loadInit() {
  const content = document.querySelector('#content');
  const header = createHeader();
  const navbar = createNavbar();
  const clr = createClear();
  const footer = createFooter();
  header.appendChild(navbar);
  content.append(header, clr, footer);
}

export default loadInit;
