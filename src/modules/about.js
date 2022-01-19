function createAboutInfo() {
  const aboutInfo = document.createElement('section');
  aboutInfo.setAttribute('id', 'about-info');
  aboutInfo.classList.add('bg-light');
  aboutInfo.classList.add('py-3');

  const wrapDiv = document.createElement('div');
  wrapDiv.classList.add('container');

  const infoLeft = document.createElement('div');
  infoLeft.classList.add('info-left');

  const infoHeading = document.createElement('h1');
  infoHeading.classList.add('l-heading');
  infoHeading.classList.add('text-primary');
  infoHeading.textContent = 'About Restaurant BT';

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laborum explicabo nobis fugiat fuga praesentium minima dolorum ipsum dolor a.';

  const wrapDivRight = document.createElement('div');
  wrapDivRight.classList.add('info-right');

  const infoImg = document.createElement('img');
  infoImg.setAttribute('src', '../src/img/photo-2.jpg');

  wrapDivRight.appendChild(infoImg);
  infoLeft.appendChild(wrapDivRight);
  infoLeft.appendChild(infoHeading);
  wrapDiv.appendChild(infoLeft);
  aboutInfo.appendChild(wrapDiv);

  return aboutInfo;
}

function createClear() {
  const clearDiv = document.createElement('div');
  clearDiv.classList.add('clr');

  return clearDiv;
}
// Test
function createTestimonials() {
  const testimonialSection = document.createElement('section');
  testimonialSection.setAttribute('id', 'testimonials');
  testimonialSection.classList.add('py-3');

  const wrapDiv = document.createElement('div');
  wrapDiv.classList.add('container');

  const testimonialHeading = document.createElement('h2');
  testimonialHeading.classList.add('l-heading');
  testimonialHeading.textContent = 'What Our Guests Say';

  const imgWrapper = document.createElement('div');
  // Test
  imgWrapper.classList.add('testimonial');
  imgWrapper.classList.add('bg-primary');

  const personImg = document.createElement('img');
  personImg.setAttribute('src', '../src/img/person-1.jpg');

  const someParagraph = document.createElement('p');
  someParagraph.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque pariatur assumenda vitae dolor rem quia, odit quam facilis. Illo quia eius reprehenderit non cum officiis minima voluptates aliquid minus dolore vel id, atque quis repellendus sed in error sunt.';

  const wrapDivRight = document.createElement('div');
  wrapDivRight.classList.add('testimonial');
  wrapDivRight.classList.add('bg-primary');

  const rightPersonImg = document.createElement('img');
  rightPersonImg.setAttribute('src', '../src/img/person-2.jpg');

  const rightParagraph = document.createElement('p');
  rightParagraph.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque pariatur assumenda vitae dolor rem quia, odit quam facilis. Illo quia eius reprehenderit non cum officiis minima voluptates aliquid minus dolore vel id, atque quis repellendus sed in error sunt.';

  imgWrapper.append(someParagraph, personImg);
  wrapDivRight.append(rightPersonImg, rightParagraph);
  wrapDiv.append(imgWrapper, testimonialHeading, wrapDivRight);

  testimonialSection.appendChild(wrapDiv);

  return testimonialSection;
}

function createFooter() {
  const footer = document.createElement('div');
  footer.setAttribute('id', 'main-footer');
  const footerParagraph = document.createElement('p');
  footerParagraph.textContent = 'Restaurant BT';
  footer.appendChild(footerParagraph);

  return footer;
}

function loadAbout() {
  const content = document.querySelector('#content');
  const tabContent = document.querySelector('#tab-content');
  tabContent.textContent = '';

  const about = createAboutInfo();
  const clr = createClear();
  const leftTestimonial = createTestimonials();
  const footer = createFooter();

  tabContent.append(about, leftTestimonial, clr, footer);
  content.appendChild(tabContent);
}

export default loadAbout;
