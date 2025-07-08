export function renderAbout() {
  const about = document.getElementById('about');
  about.innerHTML = `
    <div class="card about-card" style="align-items:center;text-align:center;animation:fadeInUp 1.1s cubic-bezier(.4,2,.6,1);box-shadow:0 12px 48px #23243a44;background:#23243a;border-radius:1.2rem;">
      <h2 style="color:#fff;">About Me</h2>
      <p style="color:#fff;max-width:480px;margin:0 auto 1.2rem auto;font-size:1.13rem;line-height:1.7;">
        Hii! My name's Ayden, I'm a 19 year old programmer, fluent in Luau, HTML, JS, Python, and TS.<br>
        I've been coding in Luau, Roblox's coding language, since early 2018, late 2017.<br>
        I'm looking to help create the things you need done, for a cheap price!<br>
        If you decide to hire me, please send me a DM!
      </p>
    </div>
  `;
} 