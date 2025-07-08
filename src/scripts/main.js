import { renderHero } from './modules/hero.js';
import { renderAbout } from './modules/about.js';
import { renderProjects } from './modules/projects.js';
import { renderSkills } from './modules/skills.js';
import { renderFooter } from './modules/footer.js';

function revealSectionsOnScroll() {
  const sections = document.querySelectorAll('main section');
  const reveal = () => {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < trigger) sec.classList.add('visible');
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
}

function highlightNavOnScroll() {
  const links = document.querySelectorAll('.nav-link');
  const sections = Array.from(document.querySelectorAll('main section'));
  window.addEventListener('scroll', () => {
    let idx = 0;
    sections.forEach((sec, i) => {
      if (window.scrollY + 100 >= sec.offsetTop) idx = i;
    });
    links.forEach(l => l.classList.remove('active'));
    if (links[idx]) links[idx].classList.add('active');
  });
}

function rollToSection(target) {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY - 32;
  const distance = end - start;
  let startTime = null;
  function easeRoll(t) {
    if (t < 0.85) return 1 - Math.pow(1 - t, 2.2);
    return 1 - Math.pow(1 - t, 2.2) + 0.03 * Math.sin(24 * t);
  }
  function animateScroll(ts) {
    if (!startTime) startTime = ts;
    const elapsed = (ts - startTime) / 1100;
    const progress = Math.min(easeRoll(elapsed), 1);
    window.scrollTo(0, start + distance * progress);
    if (progress < 1) requestAnimationFrame(animateScroll);
  }
  requestAnimationFrame(animateScroll);
}

function setupNavRoll() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          rollToSection(target);
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderProjects();
  renderSkills();
  renderFooter();
  revealSectionsOnScroll();
  highlightNavOnScroll();
  setupNavRoll();
});

setTimeout(() => {
  const tw = document.querySelector('.typewriter');
  if (tw) {
    const text = tw.textContent;
    tw.textContent = '';
    let i = 0;
    function type() {
      if (i < text.length) {
        tw.textContent += text.charAt(i);
        i++;
        setTimeout(type, 28);
      }
    }
    type();
  }
}, 400); 