export function renderHero() {
  const hero = document.getElementById('hero');
  hero.innerHTML = `
    <div class="hero-landing" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:80vh;gap:2.5rem;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:1rem;position:relative;">
        <div class="lua-orbit-wrap" style="position:relative;width:120px;height:120px;">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" alt="Lua logo" class="lua-logo-orbit" style="width:64px;height:64px;position:absolute;left:28px;top:0;z-index:2;filter:drop-shadow(0 0 24px #fff8);transition:filter 0.3s;" />
          <div class="lua-orbit-trail"></div>
        </div>
        <div class="hero-anim-title cool-anim-ayden" style="font-size:3.2rem;font-weight:900;letter-spacing:0.12em;color:#fff;animation:fadeInUp 1.2s cubic-bezier(.4,2,.6,1);">Ayden</div>
      </div>
      <div class="hero-anim-tagline" style="font-size:1.1rem;color:#b0b0b0;max-width:420px;text-align:center;animation:fadeInUp 1.8s cubic-bezier(.4,2,.6,1);">
        <span class="typewriter">full stack roblox dev</span>
      </div>
      <div class="hero-anim-actions" style="display:flex;gap:1.2rem;animation:fadeInUp 2.1s cubic-bezier(.4,2,.6,1);">
        <a href="#projects" class="button btn-primary">click to see my work</a>
      </div>
    </div>
  `;

  const title = document.querySelector('.cool-anim-ayden');
  if (title) {
    const text = 'Ayden';
    title.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(30px) scale(0.8)';
      span.style.transition = 'opacity 0.3s, transform 0.5s cubic-bezier(.4,2,.6,1)';
      title.appendChild(span);
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'none';
      }, 180 + i * 120);
    }
  }

  // Advanced Lua icon animation
  const lua = document.querySelector('.lua-logo-orbit');
  const trail = document.querySelector('.lua-orbit-trail');
  if (lua && trail) {
    let angle = 0;
    let pulse = 0;
    let lastX = 0, lastY = 0;
    function animateLua() {
      angle += 0.012;
      pulse += 0.08;
      const r = 44 + 4 * Math.sin(pulse * 0.7);
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r * (0.96 + 0.04 * Math.cos(pulse));
      lua.style.left = (28 + x) + 'px';
      lua.style.top = (28 + y) + 'px';
      lua.style.filter = `drop-shadow(0 0 24px #fff8) drop-shadow(0 0 8px #fff8) brightness(${1.08 + 0.12 * Math.sin(pulse)})`;
      lua.style.transform = `scale(${1 + 0.06 * Math.sin(pulse)}) rotateY(${10 * Math.sin(angle * 2)}deg) rotateX(${8 * Math.cos(angle * 2)}deg)`;
      // Trailing effect
      trail.style.position = 'absolute';
      trail.style.left = (28 + lastX) + 'px';
      trail.style.top = (28 + lastY) + 'px';
      trail.style.width = '64px';
      trail.style.height = '64px';
      trail.style.borderRadius = '50%';
      trail.style.background = 'radial-gradient(circle, #fff4 0%, #fff0 80%)';
      trail.style.opacity = '0.5';
      trail.style.transition = 'left 0.18s, top 0.18s, opacity 0.3s';
      lastX += (x - lastX) * 0.18;
      lastY += (y - lastY) * 0.18;
      requestAnimationFrame(animateLua);
    }
    animateLua();
  }
} 