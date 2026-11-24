import fs from 'node:fs';

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;width:1024px;height:1024px;overflow:hidden;background:#f4efe4}
  #page{position:relative;width:1024px;height:1024px;background:#f4efe4;color:#141414;
        font-family:Georgia,"Times New Roman",serif}
  .sans{font-family:"Helvetica Neue",Arial,sans-serif}
  .rule{position:absolute;background:#141414}
  .kicker{position:absolute;font-family:"Helvetica Neue",Arial,sans-serif;font-weight:700;
          font-size:11px;letter-spacing:2.6px;color:#b3261e;text-transform:uppercase}
  .head{position:absolute;font-weight:700;line-height:1}
  .dek{position:absolute;font-size:17.5px;line-height:1.36;color:#2a2a2a}
  .cap{position:absolute;font-size:11.5px;line-height:1.3;color:#5b5b5b;
       font-family:"Helvetica Neue",Arial,sans-serif}
  .tile{position:absolute;background:#fbf7ee;border:1px solid #d9d0bf}
  .tile .tk{position:absolute;left:92px;top:16px;font-family:"Helvetica Neue",Arial,sans-serif;
            font-weight:700;font-size:10px;letter-spacing:2.2px;color:#b3261e}
  .tile .th{position:absolute;left:92px;top:30px;width:352px;font-size:23px;line-height:1.06;font-weight:700}
  .tile .td{position:absolute;left:92px;top:88px;width:356px;font-size:11.5px;line-height:1.28;color:#4a4a4a;
            font-family:"Helvetica Neue",Arial,sans-serif}
  .mast{position:absolute;left:0;top:44px;width:1024px;text-align:center;
        font-family:"Helvetica Neue",Arial,sans-serif;font-weight:700;font-size:12px;letter-spacing:5.5px;color:#b3261e}
  .date{position:absolute;left:0;top:64px;width:1024px;text-align:center;
        font-size:52px;font-weight:700;letter-spacing:-.4px}
  .sub{position:absolute;left:0;top:126px;width:1024px;text-align:center;
       font-family:"Helvetica Neue",Arial,sans-serif;font-size:10.5px;letter-spacing:4.2px;color:#5c5c5c}
  .also{position:absolute;left:40px;top:892px;font-family:"Helvetica Neue",Arial,sans-serif;
        font-weight:700;font-size:10.5px;letter-spacing:2.6px;color:#b3261e}
  .also-item{position:absolute;left:150px;width:834px;font-size:12.5px;line-height:1.35;color:#232323}
  .src{position:absolute;left:40px;top:976px;font-family:"Helvetica Neue",Arial,sans-serif;
       font-size:9.5px;letter-spacing:.8px;color:#7a7a7a}
</style></head><body><div id="page">

  <div class="rule" style="left:40px;top:26px;width:944px;height:3px"></div>
  <div class="mast">WORLD NEWS IN ONE PAGE</div>
  <div class="date">Tuesday, 24 November 2026</div>
  <div class="sub">FIVE CONTINENTS · ONE DAY'S NEWS</div>
  <div class="rule" style="left:40px;top:143px;width:944px;height:2px"></div>
  <div class="rule" style="left:40px;top:148px;width:944px;height:1px"></div>

  <div class="kicker" style="left:40px;top:168px">Europe · Security</div>
  <div class="head" style="left:38px;top:190px;width:530px;font-size:55px">NATO VOWS<br>TO DEFEND<br>SPACE</div>
  <div class="dek" style="left:40px;top:392px;width:510px">Germany takes seriously reports that Russia may launch a nuclear-armed satellite. NATO says space is now part of its defence.</div>
  <div style="position:absolute;left:40px;top:490px;width:3px;height:48px;background:#b3261e"></div>
  <div style="position:absolute;left:56px;top:490px;width:500px;font-size:15.5px;font-style:italic;line-height:1.24">“We will always make sure that we defend every inch of NATO territory.”</div>
  <div class="cap" style="left:56px;top:532px;width:500px;letter-spacing:.4px">MARK RUTTE, NATO SECRETARY GENERAL, IN BERLIN</div>

  <svg width="388" height="322" viewBox="0 0 388 322" style="position:absolute;left:596px;top:166px">
    <defs>
      <radialGradient id="space" cx="42%" cy="34%" r="80%">
        <stop offset="0%" stop-color="#16233c"/><stop offset="60%" stop-color="#0a1322"/><stop offset="100%" stop-color="#060b14"/>
      </radialGradient>
      <linearGradient id="earth" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2b5f8f"/><stop offset="45%" stop-color="#16324f"/><stop offset="100%" stop-color="#08111e"/>
      </linearGradient>
      <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="388" height="322" fill="url(#space)"/>
    <g fill="#aebdd8" opacity=".7">
      <circle cx="40" cy="42" r="1"/><circle cx="120" cy="24" r=".9"/><circle cx="330" cy="38" r="1.1"/>
      <circle cx="360" cy="120" r=".8"/><circle cx="28" cy="140" r=".9"/><circle cx="286" cy="70" r=".8"/>
      <circle cx="206" cy="34" r="1"/><circle cx="352" cy="212" r=".9"/>
    </g>

    <circle cx="194" cy="560" r="380" fill="url(#earth)"/>
    <path d="M-120 214 A 340 340 0 0 1 508 214" fill="none" stroke="#5fa8d8" stroke-width="2.4" opacity=".75"/>
    <path d="M-120 222 A 348 348 0 0 1 508 222" fill="none" stroke="#2f6c9c" stroke-width="7" opacity=".25"/>

    <ellipse cx="194" cy="150" rx="158" ry="62" fill="none" stroke="#6f8fc4" stroke-width="1" stroke-dasharray="5 7" opacity=".65" transform="rotate(-14 194 150)"/>

    <g transform="translate(194 150) rotate(-14) scale(1.14)">
      <rect x="-78" y="-12" width="62" height="24" fill="#24457a" stroke="#7fa3d8" stroke-width="1.2"/>
      <g stroke="#5c84bd" stroke-width=".8" opacity=".8">
        <path d="M-70 -12 V12"/><path d="M-62 -12 V12"/><path d="M-54 -12 V12"/><path d="M-46 -12 V12"/><path d="M-38 -12 V12"/><path d="M-30 -12 V12"/><path d="M-22 -12 V12"/>
      </g>
      <rect x="16" y="-12" width="62" height="24" fill="#24457a" stroke="#7fa3d8" stroke-width="1.2"/>
      <g stroke="#5c84bd" stroke-width=".8" opacity=".8">
        <path d="M24 -12 V12"/><path d="M32 -12 V12"/><path d="M40 -12 V12"/><path d="M48 -12 V12"/><path d="M56 -12 V12"/><path d="M64 -12 V12"/><path d="M72 -12 V12"/>
      </g>
      <rect x="-18" y="-17" width="36" height="34" rx="3" fill="#dfe4ec" stroke="#8c9bb2" stroke-width="1.3"/>
      <rect x="-12" y="-11" width="24" height="22" rx="2" fill="#f3d34a" opacity=".16"/>
      <g fill="#f3d34a">
        <circle cx="0" cy="-6.2" r="3.1"/><circle cx="-5.4" cy="3.2" r="3.1"/><circle cx="5.4" cy="3.2" r="3.1"/>
      </g>
      <circle cx="0" cy="0" r="1.5" fill="#1a1a1a"/>
      <ellipse cx="0" cy="-22" rx="9" ry="3.4" fill="#c9d2df" stroke="#8c9bb2" stroke-width="1"/>
      <rect x="-1.2" y="-21" width="2.4" height="6" fill="#8c9bb2"/>
    </g>

    <circle cx="194" cy="150" r="66" fill="none" stroke="#e0473a" stroke-width="1.4" stroke-dasharray="5 7" opacity=".55"/>
    <circle cx="194" cy="150" r="76" fill="none" stroke="#e0473a" stroke-width=".8" opacity=".22"/>
  </svg>
  <div class="cap" style="left:596px;top:498px;width:388px">Reports say a Russian satellite, Sputnik-S, could be launched within 60 days. Moscow calls the reports unfounded.</div>

  <div class="rule" style="left:40px;top:548px;width:944px;height:2px"></div>

  <div class="tile" style="left:40px;top:562px;width:460px;height:146px">
    <svg width="64" height="64" viewBox="0 0 64 64" style="position:absolute;left:14px;top:22px">
      <g stroke="#1d3557" stroke-width="2" fill="none" stroke-linecap="round">
        <path d="M4 56 q6 -4 12 0 t12 0 t12 0 t12 0"/>
        <path d="M10 62 q6 -4 12 0 t12 0 t12 0"/>
      </g>
      <path d="M12 40 L44 34 L56 39 L53 45 L18 49 L10 45 Z" fill="#d8dee8" stroke="#1d3557" stroke-width="2" stroke-linejoin="round"/>
      <rect x="22" y="27" width="14" height="8" fill="#c2cbd8" stroke="#1d3557" stroke-width="1.6"/>
      <rect x="34" y="20" width="3" height="8" fill="#1d3557"/>
      <g stroke="#1d3557" stroke-width="1.8" fill="#f4efe4">
        <rect x="42" y="8" width="10" height="4" rx="2"/><rect x="55" y="8" width="3" height="4" rx="1"/>
      </g>
      <path d="M47 12 L38 30" stroke="#b3261e" stroke-width="1.4" stroke-dasharray="3 3"/>
      <g fill="#b3261e"><path d="M35 31 l6 -2 -3 6 z"/></g>
      <path d="M24 40 l7 -2" stroke="#b3261e" stroke-width="2"/>
    </svg>
    <div class="tk">AFRICA</div>
    <div class="th">Sea drones sink a Russian warship off Libya</div>
    <div class="td">Ukraine confirms the strike at Benghazi; Libya's UN-backed government condemns it.</div>
  </div>

  <div class="tile" style="left:524px;top:562px;width:460px;height:146px">
    <svg width="64" height="64" viewBox="0 0 64 64" style="position:absolute;left:14px;top:22px">
      <g stroke="#1d3557" stroke-width="2" fill="#d8dee8">
        <rect x="16" y="16" width="30" height="30" rx="3"/>
      </g>
      <g stroke="#1d3557" stroke-width="2" fill="none" stroke-linecap="round">
        <path d="M22 10 V16"/><path d="M30 10 V16"/><path d="M38 10 V16"/>
        <path d="M22 46 V52"/><path d="M30 46 V52"/><path d="M38 46 V52"/>
        <path d="M10 22 H16"/><path d="M10 31 H16"/><path d="M10 40 H16"/>
        <path d="M46 22 H52"/><path d="M46 31 H52"/><path d="M46 40 H52"/>
      </g>
      <rect x="23" y="23" width="16" height="16" fill="#f4efe4" stroke="#1d3557" stroke-width="1.4"/>
      <path d="M24 35 L28 31 L31 33 L38 25" stroke="#b3261e" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33 24 L39 24 L39 30" stroke="#b3261e" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="tk">AMERICAS</div>
    <div class="th">Nvidia reinstates Huang as CEO after Trump push</div>
    <div class="td">Shares jump as much as 36.6% as lawmakers criticise the board's decision.</div>
  </div>

  <div class="tile" style="left:40px;top:720px;width:460px;height:146px">
    <svg width="64" height="64" viewBox="0 0 64 64" style="position:absolute;left:14px;top:22px">
      <g transform="rotate(-38 32 30)">
        <rect x="14" y="14" width="30" height="12" rx="3" fill="#d8dee8" stroke="#1d3557" stroke-width="2"/>
        <rect x="41" y="17" width="18" height="6" rx="2" fill="#c2cbd8" stroke="#1d3557" stroke-width="1.8"/>
      </g>
      <rect x="10" y="49" width="44" height="5" rx="1.5" fill="#d8dee8" stroke="#1d3557" stroke-width="1.8"/>
      <path d="M18 49 L26 36" stroke="#1d3557" stroke-width="2" stroke-linecap="round"/>
      <path d="M50 8 l-6 6" stroke="#b3261e" stroke-width="2" stroke-linecap="round"/>
      <path d="M48 22 l8 -8" stroke="#b3261e" stroke-width="2" stroke-linecap="round"/>
      <path d="M54 14 l4 -4" stroke="#b3261e" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <div class="tk">ASIA</div>
    <div class="th">China sentences an official to death for spying</div>
    <div class="td">A rare capital case, for leaking national secrets to a foreign country.</div>
  </div>

  <div class="tile" style="left:524px;top:720px;width:460px;height:146px">
    <svg width="64" height="64" viewBox="0 0 64 64" style="position:absolute;left:14px;top:22px">
      <path d="M4 34 q10 -6 20 0 t20 0" stroke="#1d3557" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M4 44 q10 -6 20 0 t20 0" stroke="#1d3557" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M4 54 q10 -6 20 0 t20 0" stroke="#1d3557" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M20 30 L34 16 L48 30" fill="none" stroke="#1d3557" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="24" y="24" width="20" height="14" fill="#f4efe4" stroke="#1d3557" stroke-width="2"/>
      <rect x="30" y="30" width="8" height="8" fill="#1d3557"/>
      <path d="M50 10 l-4 8 M56 14 l-8 4" stroke="#b3261e" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <div class="tk">OCEANIA</div>
    <div class="th">New Zealand village faces 'catastrophic' flooding</div>
    <div class="td">A new report warns the Waiho River could destroy the township without action.</div>
  </div>

  <div class="rule" style="left:40px;top:884px;width:944px;height:2px"></div>
  <div class="also">ALSO TODAY</div>
  <div class="also-item" style="top:910px">FIFA awards the 2031 Women's World Cup to the US, Mexico, Costa Rica and Jamaica; the UK will host in 2035.</div>
  <div class="also-item" style="top:938px">Mexico will try 'El Chapo Isidro' despite a US extradition request; Indonesia files treason charges over spying on its president.</div>

  <div class="src">SOURCES: THE GUARDIAN · THE STRAITS TIMES · AL JAZEERA — 24 NOVEMBER 2026</div>
</div></body></html>`;

fs.writeFileSync('poster.html', html);
console.log('poster.html written', html.length, 'bytes');
