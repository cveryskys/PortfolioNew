export function renderSkills() {
  const skills = [
    { name: 'Lua', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
 //   { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
    { name: 'JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
  ];
  const section = document.getElementById('skills');
  section.innerHTML = `
    <h2 style="color:#fff;text-align:center;">Skills</h2>
    <div class="skills-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:1.5rem;justify-items:center;">
      ${skills.map((s,i) => `
        <div class="skill-card" title="${s.name}" style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;animation:fadeInUp 1.1s cubic-bezier(.4,2,.6,1);cursor:pointer;">
          <div class="skill-icon-wrap" tabindex="0" aria-label="${s.name}" style="position:relative;display:flex;align-items:center;justify-content:center;perspective:600px;">
            <img src="${s.icon}" alt="${s.name}" class="skill-icon" style="width:38px;height:38px;object-fit:contain;border-radius:12px;box-shadow:0 2px 12px #23243a22;filter:none;transition:box-shadow 0.3s,transform 0.25s;will-change:transform;" />
            <span class="ripple" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;"></span>
          </div>
          <span style="color:#b0b0b0;font-size:1rem;">${s.name}</span>
        </div>
      `).join('')}
    </div>
  `;

  document.querySelectorAll('.skill-icon-wrap').forEach(wrap => {
    const img = wrap.querySelector('.skill-icon');
    // 3D tilt/parallax effect
    wrap.addEventListener('mousemove', e => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      img.style.transform = `scale(1.18) rotateX(${-dy * 12}deg) rotateY(${dx * 12}deg)`;
      img.style.boxShadow = '0 8px 32px #fff8, 0 0 0 10px #3a3a3a88';
    });
    wrap.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
      img.style.boxShadow = '0 2px 12px #23243a22';
    });
    // Ripple burst on click
    wrap.addEventListener('mousedown', e => {
      img.style.transform = 'scale(0.92)';
      const ripple = wrap.querySelector('.ripple');
      ripple.innerHTML = '';
      for (let i = 0; i < 3; i++) {
        const r = document.createElement('span');
        r.style.position = 'absolute';
        r.style.left = (e.offsetX - 20) + 'px';
        r.style.top = (e.offsetY - 20) + 'px';
        r.style.width = r.style.height = '40px';
        r.style.borderRadius = '50%';
        r.style.background = 'rgba(255,255,255,0.13)';
        r.style.boxShadow = '0 0 16px #fff8';
        r.style.pointerEvents = 'none';
        r.style.transform = 'scale(0)';
        r.style.opacity = '0.7';
        r.style.transition = `transform 0.5s cubic-bezier(.4,2,.6,1) ${i*0.07}s, opacity 0.7s`;
        ripple.appendChild(r);
        setTimeout(() => {
          r.style.transform = 'scale(2.5)';
          r.style.opacity = '0';
        }, 10 + i*60);
        setTimeout(() => r.remove(), 700 + i*60);
      }
    });
    wrap.addEventListener('mouseup', () => {
      img.style.transform = 'scale(1.18)';
    });
    wrap.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
      img.style.boxShadow = '0 2px 12px #23243a22';
      wrap.querySelector('.ripple').innerHTML = '';
    });
    wrap.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        img.style.transform = 'scale(0.92)';
        setTimeout(() => img.style.transform = 'scale(1.18)', 200);
      }
    });
  });
} 
