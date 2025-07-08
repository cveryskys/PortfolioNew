export function renderHeader() {
  const hero = document.getElementById('hero');
  hero.innerHTML = `
    <div class="hero-content">
      <img src="assets/profile.jpg" alt="Ayden's profile photo" class="hero-avatar" />
      <h1 class="hero-title">Ayden</h1>
      <h2 class="hero-role">Full Stack Developer</h2>
      <p class="hero-tagline">I build elegant, performant web apps and love solving real-world problems with code.</p>
      <div class="hero-actions">
        <a href="#" class="button primary" id="cta-contact">Contact Me</a>
        <a href="assets/resume.pdf" class="button secondary" target="_blank">View Resume</a>
      </div>
    </div>
  `;
} 