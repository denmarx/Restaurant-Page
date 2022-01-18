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
  infoImg.setAttribute('src', './img/photo-2.jpg');

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
  testimonialSection.classList.add('py-3');

  const wrapDiv = document.createElement('div');
  wrapDiv.classList.add('container');

  const testimonialHeading = document.createElement('h2');
  testimonialHeading.classList.add('l-heading');
  testimonialHeading.textContent = 'What Our Guests Say';

  const imgWrapper = document.createElement('div');
  // Test
  imgWrapper.classList.add('testimonial', 'bg-primary');

  const personImg = document.createElement('img');
  personImg.setAttribute('src', './img/person-1.jpg');

  const someParagraph = document.createElement('p');
  someParagraph.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque pariatur assumenda vitae dolor rem quia, odit quam facilis. Illo quia eius reprehenderit non cum officiis minima voluptates aliquid minus dolore vel id, atque quis repellendus sed in error sunt.';

  imgWrapper.append(someParagraph, personImg);
  wrapDiv.append(imgWrapper, testimonialHeading);
  testimonialSection.appendChild(wrapDiv);

  return testimonialSection;
}

function loadAbout() {
  const content = document.querySelector('#content');
  const about = createAboutInfo();
  const clr = createClear();
  const leftTestimonial = createTestimonials();
  content.textContent = '';
  content.append(about, clr, leftTestimonial);
}

export default loadAbout;
