import fs from 'node:fs';

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;width:1024px;height:1024px;overflow:hidden;background:#f4efe4}
  #page{position:relative;width:1024px;height:1024px;background:#f4efe4;color:#141414;
        font-family:Georgia,"Times New Roman",serif}
  .rule{position:absolute;background:#141414}
  .vr{position:absolute;width:1px;background:#cfc6b5}
  .sans{font-family:"Helvetica Neue",Arial,sans-serif}
  .kick{position:absolute;font-family:"Helvetica Neue",Arial,sans-serif;font-weight:700;
        font-size:8.5px;letter-spacing:1.9px;color:#b3261e;text-transform:uppercase}
  .head{position:absolute;font-weight:700;line-height:1}
  .dek{position:absolute;color:#2b2b2b}
  .tab{position:absolute;top:292px;width:184px;height:28px;background:#fbf7ee;
       border:1px solid #cfc6b5;text-align:center;font-family:"Helvetica Neue",Arial,sans-serif;
       font-weight:700;font-size:8px;letter-spacing:1.6px;color:#b3261e;line-height:26px;
       text-transform:uppercase}
  .stat{position:absolute;width:184px}
  .big{font-size:24px;font-weight:700;line-height:1}
  .lab{font-family:"Helvetica Neue",Arial,sans-serif;font-size:7.6px;line-height:1.3;color:#5b5b5b;margin-top:3px}
</style></head><body><div id="page">

  <div style="position:absolute;left:0;top:0;width:1024px;height:26px;background:#141414"></div>
  <div class="sans" style="position:absolute;left:28px;top:8px;font-size:9px;letter-spacing:4px;color:#f4efe4">WORLD NEWS IN ONE PAGE</div>
  <div class="sans" style="position:absolute;left:760px;top:8px;width:236px;text-align:right;font-size:8px;letter-spacing:2px;color:#cfc6b5">ONE DAY &middot; FIVE CONTINENTS</div>

  <div style="position:absolute;left:0;top:34px;width:1024px;text-align:center;font-size:40px;font-weight:700;letter-spacing:-.4px">Tuesday, 24 November 2026</div>
  <div class="sans" style="position:absolute;left:0;top:80px;width:1024px;text-align:center;font-size:9px;letter-spacing:3.2px;color:#5c5c5c">EIGHT STORIES &middot; FIVE CONTINENTS &middot; ONE DAY</div>
  <div class="rule" style="left:28px;top:96px;width:968px;height:2px"></div>
  <div class="rule" style="left:28px;top:101px;width:968px;height:1px"></div>

  <div class="kick" style="left:28px;top:106px">Europe &middot; Security</div>
  <div class="head" style="left:26px;top:120px;width:700px;font-size:42px">NATO VOWS<br>TO DEFEND<br>SPACE</div>
  <div class="dek" style="left:28px;top:250px;width:812px;font-size:11px;line-height:1.34">NATO says space is part of its defence after reports that Russia may launch a nuclear-armed satellite within 60 days. Moscow calls the reports unfounded.</div>

  <svg width="130" height="108" viewBox="0 0 388 322" style="position:absolute;left:862px;top:110px">
    <defs>
      <radialGradient id="space" cx="42%" cy="34%" r="80%">
        <stop offset="0%" stop-color="#16233c"/><stop offset="60%" stop-color="#0a1322"/><stop offset="100%" stop-color="#060b14"/>
      </radialGradient>
      <linearGradient id="earth" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2b5f8f"/><stop offset="45%" stop-color="#16324f"/><stop offset="100%" stop-color="#08111e"/>
      </linearGradient>
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
  <div class="sans" style="position:absolute;left:862px;top:222px;width:130px;font-size:7.6px;line-height:1.28;color:#5b5b5b">Sputnik-S, a Russian satellite, could launch within 60 days, reports say; Moscow denies it.</div>

  <div class="tab" style="left:28px">Europe &middot; Nato</div>
  <div class="tab" style="left:224px">Africa &middot; Libya</div>
  <div class="tab" style="left:420px">Americas &middot; Nvidia</div>
  <div class="tab" style="left:616px">Asia &middot; China</div>
  <div class="tab" style="left:812px">Oceania &middot; NZ</div>

  <div class="rule" style="left:28px;top:328px;width:968px;height:2px"></div>
  <div class="vr" style="left:347px;top:338px;height:124px"></div>
  <div class="vr" style="left:676px;top:338px;height:124px"></div>

  <div class="kick" style="left:44px;top:334px">Africa &middot; Conflict</div>
  <svg width="36" height="36" viewBox="0 0 64 64" style="position:absolute;left:286px;top:336px">
    <g stroke="#1d3557" stroke-width="2" fill="none" stroke-linecap="round">
      <path d="M4 56 q6 -4 12 0 t12 0 t12 0 t12 0"/><path d="M10 62 q6 -4 12 0 t12 0 t12 0"/>
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
  <div class="head" style="left:44px;top:348px;width:232px;font-size:18px">SEA DRONES<br>SINK RUSSIAN<br>WARSHIP OFF LIBYA</div>
  <div class="dek" style="left:44px;top:408px;width:278px;font-size:9.5px;line-height:1.32">Ukraine confirms the strike at Benghazi. Libya's UN-backed government condemns the attack. Sea drones hit the Russian warship off the Libyan coast.</div>

  <div class="kick" style="left:373px;top:334px">Americas &middot; Business</div>
  <svg width="36" height="36" viewBox="0 0 64 64" style="position:absolute;left:615px;top:336px">
    <g stroke="#1d3557" stroke-width="2" fill="#d8dee8"><rect x="16" y="16" width="30" height="30" rx="3"/></g>
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
  <div class="head" style="left:373px;top:348px;width:232px;font-size:18px">NVIDIA<br>REINSTATES<br>HUANG AS CEO</div>
  <div class="dek" style="left:373px;top:408px;width:278px;font-size:9.5px;line-height:1.32">The board brings back Jensen Huang after a push by President Trump. Shares jump as much as 36.6% as lawmakers criticise the decision.</div>

  <div class="kick" style="left:702px;top:334px">Asia &middot; Justice</div>
  <svg width="36" height="36" viewBox="0 0 64 64" style="position:absolute;left:944px;top:336px">
    <g transform="rotate(-36 32 30)">
      <rect x="15" y="12" width="34" height="13" rx="3" fill="#d8dee8" stroke="#1d3557" stroke-width="2"/>
      <rect x="47" y="16" width="9" height="5" rx="2" fill="#c2cbd8" stroke="#1d3557" stroke-width="1.8"/>
      <rect x="28" y="24" width="8" height="16" rx="2" fill="#f4efe4" stroke="#1d3557" stroke-width="1.8"/>
    </g>
    <rect x="10" y="50" width="44" height="6" rx="2" fill="#d8dee8" stroke="#1d3557" stroke-width="2"/>
    <path d="M22 50 L30 37" stroke="#1d3557" stroke-width="2" stroke-linecap="round"/>
    <path d="M49 8 l-5 6 M56 14 l-6 5" stroke="#b3261e" stroke-width="2" stroke-linecap="round"/>
  </svg>
  <div class="head" style="left:702px;top:348px;width:232px;font-size:18px">CHINA<br>SENTENCES<br>SPY TO DEATH</div>
  <div class="dek" style="left:702px;top:408px;width:278px;font-size:9.5px;line-height:1.32">A Chinese official is sentenced to death for leaking national secrets to a foreign country &mdash; a rare capital case.</div>

  <div class="rule" style="left:28px;top:478px;width:968px;height:2px"></div>
  <div class="vr" style="left:212px;top:488px;height:106px"></div>
  <div class="vr" style="left:408px;top:488px;height:106px"></div>
  <div class="vr" style="left:604px;top:488px;height:106px"></div>
  <div class="vr" style="left:800px;top:488px;height:106px"></div>

  <div class="kick" style="left:28px;top:484px">Oceania &middot; Climate</div>
  <div class="head" style="left:28px;top:496px;width:184px;font-size:14px;line-height:1.04">NZ VILLAGE<br>FACES FLOOD<br>WARNING</div>
  <div class="dek" style="left:28px;top:544px;width:184px;font-size:8.5px;line-height:1.3">A new report warns the Waiho River could destroy the township without action. The village faces 'catastrophic' flooding, it says.</div>

  <div class="kick" style="left:224px;top:484px">By the numbers</div>
  <div class="stat" style="left:224px;top:496px"><div class="big">60</div><div class="lab">days: reported window for a Russian satellite launch</div></div>
  <div class="stat" style="left:420px;top:496px"><div class="big">36.6%</div><div class="lab">jump in Nvidia shares after the board's U-turn</div></div>
  <div class="stat" style="left:616px;top:496px"><div class="big">2031</div><div class="lab">Women's World Cup: US, Mexico, Costa Rica, Jamaica</div></div>
  <div class="stat" style="left:812px;top:496px"><div class="big">2035</div><div class="lab">Women's World Cup: United Kingdom</div></div>

  <svg width="380" height="315" viewBox="0 0 388 322" style="position:absolute;left:28px;top:608px">
    <defs>
      <radialGradient id="space2" cx="42%" cy="34%" r="80%">
        <stop offset="0%" stop-color="#16233c"/><stop offset="60%" stop-color="#0a1322"/><stop offset="100%" stop-color="#060b14"/>
      </radialGradient>
      <linearGradient id="earth2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2b5f8f"/><stop offset="45%" stop-color="#16324f"/><stop offset="100%" stop-color="#08111e"/>
      </linearGradient>
    </defs>
    <rect width="388" height="322" fill="url(#space2)"/>
    <g fill="#aebdd8" opacity=".7">
      <circle cx="40" cy="42" r="1"/><circle cx="120" cy="24" r=".9"/><circle cx="330" cy="38" r="1.1"/>
      <circle cx="360" cy="120" r=".8"/><circle cx="28" cy="140" r=".9"/><circle cx="286" cy="70" r=".8"/>
      <circle cx="206" cy="34" r="1"/><circle cx="352" cy="212" r=".9"/>
    </g>
    <circle cx="194" cy="560" r="380" fill="url(#earth2)"/>
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
  <div style="position:absolute;left:28px;top:608px;width:380px;height:315px;background:linear-gradient(to bottom,rgba(6,11,20,0) 48%,rgba(6,11,20,.86) 100%)"></div>
  <div class="sans" style="position:absolute;left:44px;top:620px;font-size:7.5px;letter-spacing:2px;color:#9fb2d0">THE LEAD STORY</div>
  <div style="position:absolute;left:44px;top:838px;width:344px;font-size:13px;font-style:italic;line-height:1.26;color:#f4efe4">“We will always make sure that we defend every inch of NATO territory.”</div>
  <div class="sans" style="position:absolute;left:44px;top:896px;width:344px;font-size:7.6px;letter-spacing:.4px;color:#c9d2df">MARK RUTTE &middot; NATO SECRETARY GENERAL &middot; BERLIN</div>

  <div class="kick" style="left:424px;top:612px">What we know</div>
  <div style="position:absolute;left:424px;top:628px;width:180px;font-size:9px;line-height:1.4;color:#2b2b2b">
    &bull; Russia may launch a nuclear-armed satellite within 60 days.<br>
    &bull; Germany takes the reports seriously.<br>
    &bull; Moscow denies them.<br>
    &bull; NATO says space is part of its defence.
  </div>

  <div class="kick" style="left:620px;top:612px">The day at a glance</div>
  <div style="position:absolute;left:620px;top:628px;width:180px;font-size:8.5px;line-height:1.4;color:#2b2b2b">
    <b style="color:#b3261e">EUROPE</b> &mdash; NATO and space<br>
    <b style="color:#b3261e">AFRICA</b> &mdash; warship sunk off Libya<br>
    <b style="color:#b3261e">AMERICAS</b> &mdash; Nvidia's CEO U-turn<br>
    <b style="color:#b3261e">ASIA</b> &mdash; death sentence for spying<br>
    <b style="color:#b3261e">OCEANIA</b> &mdash; flood warning
  </div>

  <div class="kick" style="left:816px;top:612px">Also today</div>
  <div style="position:absolute;left:816px;top:628px;width:180px;font-size:8.5px;line-height:1.4;color:#2b2b2b">
    <b>FIFA</b> awards the 2031 Women's World Cup to the US, Mexico, Costa Rica and Jamaica; the UK hosts in 2035.<br><br>
    <b>MEXICO</b> will try 'El Chapo Isidro' despite a US extradition request.<br><br>
    <b>INDONESIA</b> files treason charges over spying on its president.
  </div>

  <div class="rule" style="left:424px;top:812px;width:572px;height:1px"></div>
  <div class="kick" style="left:424px;top:822px">One day, one page</div>
  <div style="position:absolute;left:424px;top:838px;width:572px;font-size:10px;font-style:italic;line-height:1.34;color:#4a4a4a">Space, war, business, justice and climate: eight stories from five continents on Tuesday, 24 November 2026.</div>

  <div class="rule" style="left:28px;top:976px;width:968px;height:1px"></div>
  <div class="sans" style="position:absolute;left:28px;top:986px;font-size:8px;letter-spacing:.5px;color:#7a7a7a">SOURCES: THE GUARDIAN &middot; THE STRAITS TIMES &middot; AL JAZEERA &mdash; 24 NOVEMBER 2026</div>
  <div class="sans" style="position:absolute;left:760px;top:986px;width:236px;text-align:right;font-size:8px;letter-spacing:.8px;color:#7a7a7a">EIGHT STORIES &middot; FIVE CONTINENTS</div>
</div></body></html>`;

fs.writeFileSync('poster.html', html);
console.log('poster.html written', html.length, 'bytes');
