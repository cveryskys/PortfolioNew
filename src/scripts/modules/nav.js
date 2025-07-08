export function renderNav() {
  const app = document.getElementById('app');
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul>
      <li><a href="#" data-page="home">Home</a></li>
      <li><a href="#" data-page="projects">Projects</a></li>
      <li><a href="#" data-page="about">About</a></li>
      <li><a href="#" data-page="contact">Contact</a></li>
      <li><a href="#" data-page="languages">Languages & Tools</a></li>
    </ul>
  `;
  app.appendChild(nav);
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const page = e.target.getAttribute('data-page');
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      e.target.classList.add('active');
      import('./main.js').then(mod => mod.renderMain(page));
    }
  });
} 