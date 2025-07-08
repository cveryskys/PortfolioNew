document.addEventListener('DOMContentLoaded', () => {
  const bg = document.querySelector('.animated-bg');
  if (bg) {
    bg.innerHTML = `
      <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <stop offset="0%" stop-color="#23243a" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="g2" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <stop offset="0%" stop-color="#23243a" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="g3" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <stop offset="0%" stop-color="#fff" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#23243a" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="400" cy="300" r="260" fill="url(#g1)">
          <animate attributeName="cx" values="400;1200;400" dur="18s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="300;700;300" dur="16s" repeatCount="indefinite"/>
        </circle>
        <circle cx="1200" cy="700" r="220" fill="url(#g2)">
          <animate attributeName="cx" values="1200;400;1200" dur="20s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="700;200;700" dur="17s" repeatCount="indefinite"/>
        </circle>
        <circle cx="900" cy="200" r="180" fill="url(#g3)">
          <animate attributeName="cx" values="900;200;900" dur="22s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="200;800;200" dur="19s" repeatCount="indefinite"/>
        </circle>
      </svg>
      <div class="animated-bg-gradient"></div>
    `;
  }
}); 