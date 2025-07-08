import { renderProjects } from './projects.js';

export function renderMain(page) {
  let main = document.getElementById('main-content');
  if (!main) {
    main = document.createElement('main');
    main.id = 'main-content';
    document.getElementById('app').appendChild(main);
  }
  switch(page) {
    case 'projects':
      main.innerHTML = `<h2>Projects</h2><div class='projects-list'>${renderProjects()}</div>`;
      break;
    case 'about':
      main.innerHTML = `<h2>About Me</h2><p>[Bio and skills]</p>`;
      break;
    case 'contact':
      main.innerHTML = `<h2>Contact</h2><form>[Contact form]</form>`;
      break;
    case 'languages':
      main.innerHTML = `<h2>Languages & Tools</h2><div class='langs-grid'></div>`;
      import('./languages.js').then(mod => {
        document.querySelector('.langs-grid').innerHTML = mod.renderLanguages();
      });
      break;
    default:
      main.innerHTML = `<h2>Welcome</h2><p>This is Ayden's advanced developer portfolio.</p>`;
  }
} 