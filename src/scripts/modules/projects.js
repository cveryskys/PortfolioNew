export function renderProjects() {
  const galleryData = [
    { name: "Original Sin", video: "https://cdn.glitch.me/013e533f-f0ca-4b90-a6d5-ab6727e9ee5c/20250422-0504-19.0227489%20(1).mp4?v=1745430810876", link: "https://www.roblox.com/games/139340952901423/Original-Sin" },
    { name: "Doors Place", video: "https://cdn.glitch.global/28689c84-e2c2-486e-a129-1de0f701b7b6/DOORS-Video.mp4?v=1744150614387", link: "https://www.roblox.com/games/90856562619374/doors" },
    { name: "Fan Hitting", video: "https://cdn.glitch.global/28689c84-e2c2-486e-a129-1de0f701b7b6/Fan-Hitting.mp4?v=1744150737494", link: "https://www.roblox.com/games/81444418271835/Fan-Hitting-commision" },
    { name: "Geishas", video: "https://cdn.glitch.global/28689c84-e2c2-486e-a129-1de0f701b7b6/GeishasX.mp4?v=1744150844729", link: "https://www.roblox.com/games/124145520481844/Geishas" },
    { name: "Body Editor", video: "https://cdn.glitch.me/28689c84-e2c2-486e-a129-1de0f701b7b6/Proportions.mp4?v=1744150980257", link: "https://www.roblox.com/games/75188166608222/Core-STartup" },
    { name: "Possession", video: "https://cdn.glitch.me/28689c84-e2c2-486e-a129-1de0f701b7b6/Possesion.mp4?v=1744151146892", link: "https://www.roblox.com/games/126922027739165/The-Nuns-Crypt" },
    { name: "Parkour", video: "https://cdn.glitch.me/28689c84-e2c2-486e-a129-1de0f701b7b6/Parkour.mp4?v=1744151374142", link: "https://www.roblox.com/games/17515509343/TESTING-FOR-NEW-GAME" },
    { name: "LBE System Remake", video: "https://cdn.glitch.me/28689c84-e2c2-486e-a129-1de0f701b7b6/Lbe%20Systems.mp4?v=1744151717183", link: "https://www.roblox.com/games/94642962344557/Lbe-Test" },
    { name: "Placing System", video: "https://cdn.glitch.me/28689c84-e2c2-486e-a129-1de0f701b7b6/Placing.mp4?v=1744151856550", link: "https://www.roblox.com/games/120307706136956/Placables-System-V-1" },
    { name: "MiniGame", video: "https://cdn.glitch.me/28689c84-e2c2-486e-a129-1de0f701b7b6/MiniGame.mp4?v=1744152021587", link: "https://www.roblox.com/games/138197548356192/lol" },
    { name: "Evruex", video: "https://cdn.glitch.me/28689c84-e2c2-486e-a129-1de0f701b7b6/Evruex.mp4?v=1744152277664", link: "https://www.roblox.com/games/131098077080576/vruex-Beta" }
  ];
  const section = document.getElementById('projects');
  section.innerHTML = `
    <h2 style=\"color:#fff;text-align:center;\">Past / Recent projects</h2>
    <div class=\"projects-grid\" style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:2.2rem;\">
      ${galleryData.map((p,i) => `
        <div class=\"card project-card project-hover\" style=\"align-items:center;text-align:center;animation:fadeInUp 1.1s cubic-bezier(.4,2,.6,1);\">
          <video src=\"${p.video}\" class=\"classic-project-video\" controls preload=\"metadata\" style=\"width:100%;max-width:320px;border-radius:1.2rem;box-shadow:0 2px 12px #23243a22;margin-bottom:1rem;background:#23243a;transition:box-shadow 0.3s,transform 0.3s;\"></video>
          <h3 style=\"color:#fff;font-size:1.15rem;font-weight:700;margin:0.2rem 0;\">${p.name}</h3>
          <a href=\"${p.link}\" class=\"button btn-secondary\" target=\"_blank\" style=\"margin-top:0.7rem;\">View on Roblox</a>
        </div>
      `).join('')}
    </div>
  `;

  document.querySelectorAll('.classic-project-video').forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.style.transform = 'scale(1.045)';
      video.style.boxShadow = '0 16px 48px #fff2, 0 2px 12px #23243a44';
      video.style.filter = 'brightness(1.08) drop-shadow(0 0 16px #fff4)';
    });
    video.addEventListener('mouseleave', () => {
      video.style.transform = '';
      video.style.boxShadow = '0 2px 12px #23243a22';
      video.style.filter = '';
    });
    video.addEventListener('focus', () => {
      video.style.transform = 'scale(1.045)';
      video.style.boxShadow = '0 16px 48px #fff2, 0 2px 12px #23243a44';
      video.style.filter = 'brightness(1.08) drop-shadow(0 0 16px #fff4)';
    });
    video.addEventListener('blur', () => {
      video.style.transform = '';
      video.style.boxShadow = '0 2px 12px #23243a22';
      video.style.filter = '';
    });
  });

  document.querySelectorAll('.project-hover').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
    card.addEventListener('mousedown', () => {
      card.classList.add('active');
    });
    card.addEventListener('mouseup', () => {
      card.classList.remove('active');
    });
  });
} 