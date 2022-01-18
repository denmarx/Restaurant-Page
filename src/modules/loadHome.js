function createShowcase() {
  const scDiv = document.createElement('div');
  scDiv.setAttribute('id', 'showcase');

  const scContainer = document.createElement('div');
  scContainer.classList.add('container');

  const scContent = document.createElement('div');
  scContent.classList.add('showcase-content');

  const welcomeHeading = document.createElement('h1');

  const welcomeSpan = document.createElement('span');
  welcomeSpan.classList.add('text-primary');
  welcomeSpan.textContent = 'Enjoy Your Meal';

  const welcomeParagraph = document.createElement('p');
  welcomeParagraph.classList.add('lead');
  welcomeParagraph.textContent =
    'orem, ipsum dolor sit amet consectetur adipisicing elit. Omnis vel qui accusantium illum, nam ex';

  const welcomeLink = document.createElement('a');
  welcomeLink.classList.add('btn');
  welcomeLink.setAttribute('href', 'about.html');
  welcomeLink.textContent = 'About Our Restaurant';

  welcomeHeading.appendChild(welcomeSpan);
  scContent.append(welcomeHeading, welcomeParagraph, welcomeLink);
  scContainer.appendChild(scContent);
  scDiv.appendChild(scContainer);

  return scDiv;
}

function createHomeInfo() {
  const homeInfo = document.createElement('section');
  homeInfo.setAttribute('id', 'home-info');
  homeInfo.classList.add('bg-dark');

  const infoImg = document.createElement('div');
  infoImg.classList.add('info-img');

  const infoContent = document.createElement('div');
  infoContent.classList.add('info-content');

  const infoHeading = document.createElement('h2');

  const headingSpan = document.createElement('span');
  headingSpan.classList.add('text-primary');
  headingSpan.textContent = 'The History of Our Restaurant';

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laborum explicabo nobis fugiat fuga praesentium minima dolorum ipsum dolor a.';

  const infoLink = document.createElement('a');
  infoLink.setAttribute('href', 'about.html');
  infoLink.classList.add('btn');
  infoLink.classList.add('btn-light');
  infoLink.textContent = 'Read More';

  infoHeading.appendChild(headingSpan);
  infoContent.append(infoHeading, infoParagraph, infoLink);
  homeInfo.appendChild(infoContent);
  homeInfo.appendChild(infoImg);

  return homeInfo;
}

function createFeatures() {
  const featuresSection = document.createElement('div');
  featuresSection.setAttribute('id', 'features');

  const box1 = document.createElement('div');
  box1.classList.add('box');
  box1.classList.add('bg-light');

  const boxI1 = document.createElement('i');
  boxI1.classList.add('fas');
  boxI1.classList.add('fa-hotel');
  boxI1.classList.add('fa-3x');

  const heading1 = document.createElement('h3');
  heading1.textContent = 'Great Location';

  const paragraph1 = document.createElement('P');
  paragraph1.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?';

  const box2 = document.createElement('div');
  box2.classList.add('box');
  box2.classList.add('bg-primary');

  const boxI2 = document.createElement('i');
  boxI2.classList.add('fas');
  boxI2.classList.add('fa-utensils');
  boxI2.classList.add('fa-3x');

  const heading2 = document.createElement('h3');
  heading2.textContent = 'Free Meals';

  const paragraph2 = document.createElement('P');
  paragraph2.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?';

  const box3 = document.createElement('div');
  box3.classList.add('box');
  box3.classList.add('bg-light');

  const boxI3 = document.createElement('i');
  boxI3.classList.add('fas');
  boxI3.classList.add('fa-dumbbell');
  boxI3.classList.add('fa-3x');

  const heading3 = document.createElement('h3');
  heading3.textContent = 'Fitness Room';

  const paragraph3 = document.createElement('P');
  paragraph3.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?';

  box3.append(boxI3, heading3, paragraph3);
  box2.append(boxI2, heading2, paragraph2);
  box1.append(boxI1, heading1, paragraph1);

  featuresSection.append(box3, box2, box1);

  return featuresSection;
}

function loadHome() {
  const content = document.querySelector('#content');

  const showcase = createShowcase();
  const home = createHomeInfo();
  const features = createFeatures();

  content.append(showcase, home, features);
}
export default loadHome;
