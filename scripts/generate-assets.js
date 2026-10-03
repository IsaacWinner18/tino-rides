/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const appDir = path.join(rootDir, 'app');

// --- 1. Bespoke Luxury Emblem SVG (512x512) ---
const emblemSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background Radial Gradient -->
    <radialGradient id="bgGrad" cx="50%" cy="42%" r="62%">
      <stop offset="0%" stop-color="#161a24" />
      <stop offset="55%" stop-color="#0e1017" />
      <stop offset="100%" stop-color="#07080a" />
    </radialGradient>

    <!-- Chrome / Platinum Gradient (Light & Reflective) -->
    <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="28%" stop-color="#e2e8f0" />
      <stop offset="50%" stop-color="#94a3b8" />
      <stop offset="72%" stop-color="#cbd5e1" />
      <stop offset="100%" stop-color="#64748b" />
    </linearGradient>

    <!-- Dark Metal Bevel -->
    <linearGradient id="metalDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>

    <!-- Electric Sapphire Blue Gradient -->
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="45%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>

    <!-- Drop Shadows and Glow -->
    <filter id="badgeGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="10" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.75" />
    </filter>
  </defs>

  <!-- Circular Outer Shield Housing -->
  <circle cx="256" cy="256" r="236" fill="url(#bgGrad)" stroke="url(#chromeGrad)" stroke-width="2.5" />
  <circle cx="256" cy="256" r="226" fill="none" stroke="url(#blueGrad)" stroke-width="1.2" stroke-opacity="0.4" stroke-dasharray="8 5" />

  <!-- Ambient Sapphire Aura behind emblem -->
  <ellipse cx="256" cy="225" rx="145" ry="95" fill="#2563eb" opacity="0.18" filter="url(#badgeGlow)" />

  <!-- Central Crest Group -->
  <g filter="url(#softShadow)">
    <!-- Shield / Crest Silhouette Base -->
    <path d="M 256 122 L 360 162 C 360 252, 316 312, 256 342 C 196 312, 152 252, 152 162 Z"
          fill="url(#metalDark)" stroke="url(#chromeGrad)" stroke-width="1.5" stroke-opacity="0.5" />

    <!-- AERO WING FEATHERS (LEFT) -->
    <path d="M 124 168 C 160 152, 206 156, 246 166 L 244 182 C 210 174, 168 172, 136 186 Z" fill="url(#chromeGrad)" />
    <path d="M 142 198 C 174 186, 210 188, 244 198 L 242 212 C 214 204, 180 203, 154 214 Z" fill="url(#blueGrad)" />
    <path d="M 166 226 C 192 218, 220 220, 242 228 L 240 240 C 222 234, 198 232, 176 242 Z" fill="url(#chromeGrad)" />

    <!-- AERO WING FEATHERS (RIGHT - SYMMETRICAL) -->
    <path d="M 388 168 C 352 152, 306 156, 266 166 L 268 182 C 302 174, 344 172, 376 186 Z" fill="url(#chromeGrad)" />
    <path d="M 370 198 C 338 186, 302 188, 268 198 L 270 212 C 298 204, 332 203, 358 214 Z" fill="url(#blueGrad)" />
    <path d="M 346 226 C 320 218, 292 220, 270 228 L 272 240 C 290 234, 314 232, 336 242 Z" fill="url(#chromeGrad)" />

    <!-- COMMANDING ARCHITECTURAL 'T' MONOGRAM -->
    <polygon points="256,112 272,132 256,138 240,132" fill="url(#blueGrad)" stroke="#ffffff" stroke-width="1.2" />
    <path d="M 194 138 L 256 145 L 256 160 L 204 153 Z" fill="#ffffff" />
    <path d="M 256 145 L 318 138 L 308 153 L 256 160 Z" fill="#94a3b8" />
    <polygon points="246,160 256,160 256,310 248,322 242,270" fill="url(#chromeGrad)" />
    <polygon points="256,160 266,160 270,270 264,322 256,310" fill="url(#blueGrad)" />
    <polygon points="248,322 256,310 264,322 256,338" fill="#38bdf8" />

    <circle cx="256" cy="126" r="3" fill="#ffffff" />
    <circle cx="256" cy="285" r="3.5" fill="#93c5fd" />
    <circle cx="224" cy="275" r="2.5" fill="#3b82f6" />
    <circle cx="288" cy="275" r="2.5" fill="#3b82f6" />
  </g>

  <!-- BRAND TYPOGRAPHY: TINO RIDES -->
  <g transform="translate(0, 400)">
    <text x="256" y="0" text-anchor="middle" font-family="'Poppins', 'Segoe UI', system-ui, sans-serif" font-size="34" font-weight="900" letter-spacing="4">
      <tspan fill="#ffffff">TINO</tspan>
      <tspan dx="8" fill="#3b82f6">RIDES</tspan>
    </text>
    <text x="256" y="24" text-anchor="middle" font-family="'Poppins', 'Segoe UI', system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#94a3b8" letter-spacing="4">
      LUXURY CAR HIRE &amp; CHAUFFEUR
    </text>
  </g>
</svg>`;

// --- 2. Horizontal Scalable Logo for Navigation & Headers ---
const logoHorizontalSvg = (theme = 'dark') => {
  const isDark = theme === 'dark';
  const primaryText = isDark ? '#ffffff' : '#0a0d14';
  const subText = isDark ? '#94a3b8' : '#64748b';
  const iconBg = isDark ? '#141822' : '#0f172a';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 90" width="460" height="90">
  <defs>
    <linearGradient id="hChrome_${theme}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="50%" stop-color="#cbd5e1" />
      <stop offset="100%" stop-color="#94a3b8" />
    </linearGradient>
    <linearGradient id="hBlue_${theme}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="50%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
  </defs>

  <!-- Left Icon Emblem Badge -->
  <g transform="translate(6, 6)">
    <circle cx="39" cy="39" r="37" fill="${iconBg}" stroke="url(#hChrome_${theme})" stroke-width="1.8" />
    <circle cx="39" cy="39" r="33" fill="none" stroke="url(#hBlue_${theme})" stroke-width="1" stroke-opacity="0.5" stroke-dasharray="3 3" />
    
    <!-- Wings -->
    <path d="M 18 27 C 25 23, 34 24, 38 26 L 37 31 C 32 29, 26 28, 21 31 Z" fill="url(#hChrome_${theme})" />
    <path d="M 22 35 C 28 32, 34 33, 38 35 L 37 39 C 33 37, 28 37, 24 40 Z" fill="url(#hBlue_${theme})" />
    <path d="M 60 27 C 53 23, 44 24, 40 26 L 41 31 C 46 29, 52 28, 57 31 Z" fill="url(#hChrome_${theme})" />
    <path d="M 56 35 C 50 32, 44 33, 40 35 L 41 39 C 45 37, 50 37, 54 40 Z" fill="url(#hBlue_${theme})" />

    <!-- Center T -->
    <polygon points="39,18 43,22 39,24 35,22" fill="url(#hBlue_${theme})" />
    <path d="M 28 22 L 39 24 L 39 27 L 31 26 Z" fill="#ffffff" />
    <path d="M 39 24 L 50 22 L 47 26 L 39 27 Z" fill="#94a3b8" />
    <polygon points="37,27 39,27 39,52 36,54 35,46" fill="url(#hChrome_${theme})" />
    <polygon points="39,27 41,27 43,46 42,54 39,52" fill="url(#hBlue_${theme})" />
    <polygon points="36,54 39,52 42,54 39,59" fill="#38bdf8" />
  </g>

  <!-- Typography: TINO RIDES -->
  <text x="100" y="49" font-family="'Poppins', 'Segoe UI', system-ui, sans-serif" font-size="34" font-weight="900" letter-spacing="1">
    <tspan fill="${primaryText}">TINO</tspan>
    <tspan dx="8" fill="#3b82f6">RIDES</tspan>
  </text>
  
  <!-- Subtitle Tagline -->
  <text x="102" y="70" font-family="'Poppins', 'Segoe UI', system-ui, sans-serif" font-size="9.5" font-weight="600" fill="${subText}" letter-spacing="3.5">
    PREMIER LUXURY &amp; CHAUFFEUR
  </text>
</svg>`;
};

// --- 3. Standalone Pure Emblem (Transparent Background) ---
const pureEmblemSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300">
  <defs>
    <linearGradient id="pChrome" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="35%" stop-color="#e2e8f0" />
      <stop offset="65%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#64748b" />
    </linearGradient>
    <linearGradient id="pBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="50%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <filter id="pGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <g transform="translate(150, 150) scale(1.15)">
    <!-- Wings Left -->
    <path d="M -110 -35 C -75 -50, -32 -46, 0 -36 L -2 -22 C -32 -30, -70 -32, -98 -20 Z" fill="url(#pChrome)" />
    <path d="M -94 -9 C -64 -20, -30 -18, 0 -8 L -2 4 C -28 -4, -58 -6, -82 4 Z" fill="url(#pBlue)" />
    <path d="M -72 16 C -50 9, -24 9, 0 16 L -2 26 C -22 21, -44 20, -62 28 Z" fill="url(#pChrome)" />

    <!-- Wings Right -->
    <path d="M 110 -35 C 75 -50, 32 -46, 0 -36 L 2 -22 C 32 -30, 70 -32, 98 -20 Z" fill="url(#pChrome)" />
    <path d="M 94 -9 C 64 -20, 30 -18, 0 -8 L 2 4 C 28 -4, 58 -6, 82 4 Z" fill="url(#pBlue)" />
    <path d="M 72 16 C 50 9, 24 9, 0 16 L 2 26 C 22 21, 44 20, 62 28 Z" fill="url(#pChrome)" />

    <!-- Top Monogram Crown -->
    <polygon points="0,-82 14,-64 0,-59 -14,-64" fill="url(#pBlue)" stroke="#ffffff" stroke-width="1.2" />
    <path d="M -54 -64 L 0 -58 L 0 -45 L -45 -52 Z" fill="#ffffff" />
    <path d="M 0 -58 L 54 -64 L 45 -52 L 0 -45 Z" fill="#94a3b8" />

    <!-- Vertical Stem -->
    <polygon points="-10,-45 0,-45 0,70 -7,80 -12,40" fill="url(#pChrome)" />
    <polygon points="0,-45 10,-45 12,40 7,80 0,70" fill="url(#pBlue)" />
    <polygon points="-7,80 0,70 7,80 0,94" fill="#38bdf8" />

    <circle cx="0" cy="-68" r="2.5" fill="#ffffff" />
    <circle cx="0" cy="50" r="3" fill="#60a5fa" filter="url(#pGlow)" />
  </g>
</svg>`;

async function main() {
  console.log('Generating assets in:', publicDir);

  // 1. Write SVGs
  fs.writeFileSync(path.join(publicDir, 'tino-rides-emblem.svg'), emblemSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'tino-rides-icon.svg'), pureEmblemSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'tino-rides-logo.svg'), logoHorizontalSvg('dark'), 'utf8');
  fs.writeFileSync(path.join(publicDir, 'tino-rides-logo-light.svg'), logoHorizontalSvg('light'), 'utf8');

  // 2. Render 512x512 Master Logo PNG
  const logoBuffer = await sharp(Buffer.from(emblemSvg))
    .resize(512, 512)
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'logo.png'), logoBuffer);
  fs.writeFileSync(path.join(appDir, 'icon.png'), logoBuffer);

  // 3. Render PWA / Mobile Icon 192x192
  await sharp(Buffer.from(emblemSvg))
    .resize(192, 192)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'logo-192.png'));

  // 4. Render Apple Touch Icon 180x180
  const appleTouchBuffer = await sharp(Buffer.from(emblemSvg))
    .resize(180, 180)
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouchBuffer);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), appleTouchBuffer);

  // 5. Render Horizontal Logo PNG (dark banner and light banner)
  await sharp(Buffer.from(logoHorizontalSvg('dark')))
    .resize(920, 180)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'tino-rides-logo.png'));

  await sharp(Buffer.from(logoHorizontalSvg('light')))
    .resize(920, 180)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'tino-rides-logo-light.png'));

  // 6. Generate Master Open Graph Image (1200 x 630)
  const showroomPath = path.join(publicDir, 'Luxury Black SUV Showroom Reflection.png');
  const rollsRoycePath = path.join(publicDir, 'vehicles', 'rolls-royce.png');

  const ogOverlaySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <defs>
      <linearGradient id="scrimLeft" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0a0c10" stop-opacity="0.96" />
        <stop offset="45%" stop-color="#0a0c10" stop-opacity="0.88" />
        <stop offset="70%" stop-color="#0a0c10" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#0a0c10" stop-opacity="0.1" />
      </linearGradient>

      <linearGradient id="bottomFade" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a0c10" stop-opacity="0" />
        <stop offset="60%" stop-color="#0a0c10" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#0a0c10" stop-opacity="0.95" />
      </linearGradient>

      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e293b" stop-opacity="0.85" />
        <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9" />
      </linearGradient>

      <filter id="ogTextShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#000000" flood-opacity="0.9" />
      </filter>
    </defs>

    <rect width="1200" height="630" fill="url(#scrimLeft)" />
    <rect width="1200" height="630" fill="url(#bottomFade)" />

    <!-- Top Left Brand Badge -->
    <g transform="translate(70, 65)">
      <rect x="0" y="0" width="260" height="34" rx="17" fill="#1e293b" fill-opacity="0.9" stroke="#3b82f6" stroke-width="1.2" />
      <circle cx="18" cy="17" r="4.5" fill="#38bdf8" />
      <text x="32" y="22" font-family="'Poppins', 'Segoe UI', system-ui, sans-serif" font-size="11" font-weight="700" fill="#93c5fd" letter-spacing="2">
        NIGERIA'S PREMIER FLEET
      </text>

      <!-- Main Headline: TINO RIDES with Drop Shadow -->
      <g filter="url(#ogTextShadow)">
        <text x="0" y="105" font-family="'Poppins', 'Segoe UI', system-ui, sans-serif" font-size="70" font-weight="900" letter-spacing="1">
          <tspan fill="#ffffff">TINO</tspan>
          <tspan dx="16" fill="#3b82f6">RIDES</tspan>
        </text>
      </g>

      <!-- Subtitle -->
      <text x="0" y="155" font-family="'Poppins', 'Segoe UI', system-ui, sans-serif" font-size="22" font-weight="600" fill="#f1f5f9" letter-spacing="0.4">
        Luxury Car Rental &amp; VIP Chauffeur Services
      </text>

      <!-- Vehicle Highlight / Services -->
      <text x="0" y="200" font-family="'Poppins', 'Segoe UI', system-ui, sans-serif" font-size="15" font-weight="500" fill="#94a3b8">
        Rolls-Royce Ghost • Mercedes-Maybach • Armored SUVs • Supercars
      </text>
      <text x="0" y="225" font-family="'Poppins', 'Segoe UI', system-ui, sans-serif" font-size="14.5" font-weight="400" fill="#64748b">
        Lagos (VI, Ikoyi, Lekki) • Abuja (FCT) • Intercity VIP Armed Convoy
      </text>

      <!-- Feature Pill Badges -->
      <g transform="translate(0, 270)">
        <rect x="0" y="0" width="160" height="42" rx="10" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.2" />
        <text x="16" y="26" font-family="'Poppins', system-ui, sans-serif" font-size="13" font-weight="600" fill="#ffffff">
          ★ 5-Star Rated
        </text>

        <rect x="175" y="0" width="180" height="42" rx="10" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.2" />
        <text x="191" y="26" font-family="'Poppins', system-ui, sans-serif" font-size="13" font-weight="600" fill="#ffffff">
          🛡️ Armored Escort
        </text>

        <rect x="370" y="0" width="170" height="42" rx="10" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.2" />
        <text x="386" y="26" font-family="'Poppins', system-ui, sans-serif" font-size="13" font-weight="600" fill="#ffffff">
          ⚡ 24/7 Chauffeur
        </text>
      </g>

      <!-- URL & Footer Indicator -->
      <g transform="translate(0, 420)">
        <text x="0" y="0" font-family="'Poppins', system-ui, sans-serif" font-size="17" font-weight="800" fill="#3b82f6" letter-spacing="1.5">
          tinorides.com
        </text>
        <text x="160" y="-1" font-family="'Poppins', system-ui, sans-serif" font-size="13" font-weight="500" fill="#64748b">
          | Instant Online Booking &amp; VIP Concierge
        </text>
      </g>
    </g>
  </svg>`;

  const resizedShowroom = await sharp(showroomPath)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.65, saturation: 1.1 })
    .toBuffer();

  const resizedRolls = await sharp(rollsRoycePath)
    .resize(680, 285, { fit: 'contain' })
    .toBuffer();

  const overlayBuffer = Buffer.from(ogOverlaySvg);

  const ogBuffer = await sharp(resizedShowroom)
    .composite([
      {
        input: resizedRolls,
        top: 295,
        left: 540,
      },
      {
        input: overlayBuffer,
        top: 0,
        left: 0,
      },
    ])
    .png({ quality: 95 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'og-image.png'), ogBuffer);
  fs.writeFileSync(path.join(appDir, 'opengraph-image.png'), ogBuffer);
  console.log('Saved public/og-image.png and app/opengraph-image.png');

  // 7. Write site.webmanifest
  const manifest = {
    name: "TINO RIDES - Luxury Car Rental & Chauffeur Services",
    short_name: "Tino Rides",
    description: "Nigeria's premier luxury car rental, VIP chauffeur, and armored convoy escort services.",
    start_url: "/",
    display: "standalone",
    background_color: "#111215",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/logo-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf8');
  console.log('Saved public/site.webmanifest');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
