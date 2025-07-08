export const languages = [
  {
    name: 'JavaScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    alt: 'JavaScript'
  },
  {
    name: 'HTML5',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    alt: 'HTML5'
  },
  {
    name: 'CSS3',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    alt: 'CSS3'
  },
  {
    name: 'Node.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    alt: 'Node.js'
  },
  {
    name: 'React',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'React'
  },
  {
    name: 'Git',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    alt: 'Git'
  }
];

export function renderLanguages() {
  return languages.map(lang => `
    <div class="lang-card" title="${lang.name}">
      <img src="${lang.img}" alt="${lang.alt}" />
      <span>${lang.name}</span>
    </div>
  `).join('');
} 