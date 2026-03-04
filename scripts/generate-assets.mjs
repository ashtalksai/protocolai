import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const DEEP_NAVY = '#1E3A5F';
const WARM_AMBER = '#F59E0B';
const WHITE = '#FFFFFF';

const assetsDir = path.join(process.cwd(), 'public', 'assets');

// Ensure directory exists
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Logo SVG - Clean wordmark with icon
function createLogoSVG(width = 1500, height = 750) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${DEEP_NAVY};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2D4A6F;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" rx="40"/>
  
  <!-- Icon - Abstract Protocol/Document symbol -->
  <g transform="translate(${width * 0.12}, ${height * 0.25})">
    <!-- Main document shape -->
    <rect x="0" y="0" width="160" height="200" rx="16" fill="${WHITE}" opacity="0.95"/>
    <!-- Folded corner -->
    <path d="M120 0 L160 40 L120 40 Z" fill="${WARM_AMBER}"/>
    <!-- Lines representing protocol content -->
    <rect x="24" y="60" width="100" height="12" rx="6" fill="${DEEP_NAVY}" opacity="0.3"/>
    <rect x="24" y="88" width="80" height="12" rx="6" fill="${WARM_AMBER}" opacity="0.8"/>
    <rect x="24" y="116" width="112" height="12" rx="6" fill="${DEEP_NAVY}" opacity="0.3"/>
    <rect x="24" y="144" width="60" height="12" rx="6" fill="${DEEP_NAVY}" opacity="0.3"/>
    <!-- AI sparkle -->
    <circle cx="140" cy="180" r="24" fill="${WARM_AMBER}"/>
    <path d="M140 164 L144 176 L156 180 L144 184 L140 196 L136 184 L124 180 L136 176 Z" fill="${WHITE}"/>
  </g>
  
  <!-- Text -->
  <text x="${width * 0.32}" y="${height * 0.56}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="140" font-weight="700" fill="${WHITE}">Protocol</text>
  <text x="${width * 0.72}" y="${height * 0.56}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="140" font-weight="700" fill="${WARM_AMBER}">Pad</text>
  
  <!-- Tagline -->
  <text x="${width * 0.32}" y="${height * 0.72}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="36" font-weight="400" fill="${WHITE}" opacity="0.7">AI-Powered Clinical Protocols</text>
</svg>`;
}

// Favicon SVG - Just the icon
function createFaviconSVG(size = 32) {
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${DEEP_NAVY};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2D4A6F;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="${size}" height="${size}" fill="url(#favGrad)" rx="${size * 0.2}"/>
  
  <!-- Simplified document icon -->
  <rect x="${size * 0.22}" y="${size * 0.16}" width="${size * 0.56}" height="${size * 0.68}" rx="${size * 0.06}" fill="${WHITE}" opacity="0.95"/>
  
  <!-- Folded corner -->
  <path d="M${size * 0.58} ${size * 0.16} L${size * 0.78} ${size * 0.32} L${size * 0.58} ${size * 0.32} Z" fill="${WARM_AMBER}"/>
  
  <!-- AI sparkle -->
  <circle cx="${size * 0.65}" cy="${size * 0.7}" r="${size * 0.12}" fill="${WARM_AMBER}"/>
  <path d="M${size * 0.65} ${size * 0.6} L${size * 0.68} ${size * 0.67} L${size * 0.75} ${size * 0.7} L${size * 0.68} ${size * 0.73} L${size * 0.65} ${size * 0.8} L${size * 0.62} ${size * 0.73} L${size * 0.55} ${size * 0.7} L${size * 0.62} ${size * 0.67} Z" fill="${WHITE}"/>
</svg>`;
}

// App Icon SVG - Square with rounded corners
function createAppIconSVG(size = 1080) {
  const padding = size * 0.15;
  const iconSize = size - padding * 2;
  
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${DEEP_NAVY};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2D4A6F;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="${size}" height="${size}" fill="url(#appGrad)" rx="${size * 0.22}"/>
  
  <!-- Large document icon centered -->
  <g transform="translate(${padding + iconSize * 0.2}, ${padding})">
    <rect x="0" y="0" width="${iconSize * 0.6}" height="${iconSize * 0.75}" rx="${iconSize * 0.05}" fill="${WHITE}" opacity="0.95"/>
    
    <!-- Folded corner -->
    <path d="M${iconSize * 0.42} 0 L${iconSize * 0.6} ${iconSize * 0.12} L${iconSize * 0.42} ${iconSize * 0.12} Z" fill="${WARM_AMBER}"/>
    
    <!-- Protocol lines -->
    <rect x="${iconSize * 0.08}" y="${iconSize * 0.2}" width="${iconSize * 0.35}" height="${iconSize * 0.04}" rx="${iconSize * 0.02}" fill="${DEEP_NAVY}" opacity="0.3"/>
    <rect x="${iconSize * 0.08}" y="${iconSize * 0.3}" width="${iconSize * 0.28}" height="${iconSize * 0.04}" rx="${iconSize * 0.02}" fill="${WARM_AMBER}" opacity="0.8"/>
    <rect x="${iconSize * 0.08}" y="${iconSize * 0.4}" width="${iconSize * 0.4}" height="${iconSize * 0.04}" rx="${iconSize * 0.02}" fill="${DEEP_NAVY}" opacity="0.3"/>
    <rect x="${iconSize * 0.08}" y="${iconSize * 0.5}" width="${iconSize * 0.22}" height="${iconSize * 0.04}" rx="${iconSize * 0.02}" fill="${DEEP_NAVY}" opacity="0.3"/>
    
    <!-- AI sparkle -->
    <circle cx="${iconSize * 0.48}" cy="${iconSize * 0.62}" r="${iconSize * 0.1}" fill="${WARM_AMBER}"/>
    <path d="M${iconSize * 0.48} ${iconSize * 0.54} L${iconSize * 0.51} ${iconSize * 0.6} L${iconSize * 0.57} ${iconSize * 0.62} L${iconSize * 0.51} ${iconSize * 0.64} L${iconSize * 0.48} ${iconSize * 0.7} L${iconSize * 0.45} ${iconSize * 0.64} L${iconSize * 0.39} ${iconSize * 0.62} L${iconSize * 0.45} ${iconSize * 0.6} Z" fill="${WHITE}"/>
  </g>
  
  <!-- Wordmark at bottom -->
  <text x="${size * 0.5}" y="${size * 0.92}" text-anchor="middle" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${size * 0.065}" font-weight="600" fill="${WHITE}">Protocol<tspan fill="${WARM_AMBER}">Pad</tspan></text>
</svg>`;
}

// OG Image SVG - Social sharing format
function createOGImageSVG(width = 1200, height = 630) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ogGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${DEEP_NAVY};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2D4A6F;stop-opacity:1" />
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="${WHITE}" stroke-width="0.5" opacity="0.05"/>
    </pattern>
  </defs>
  
  <rect width="${width}" height="${height}" fill="url(#ogGrad)"/>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>
  
  <!-- Decorative circles -->
  <circle cx="${width * 0.85}" cy="${height * 0.2}" r="150" fill="${WARM_AMBER}" opacity="0.1"/>
  <circle cx="${width * 0.1}" cy="${height * 0.8}" r="100" fill="${WARM_AMBER}" opacity="0.1"/>
  
  <!-- Icon -->
  <g transform="translate(${width * 0.08}, ${height * 0.28})">
    <rect x="0" y="0" width="120" height="150" rx="12" fill="${WHITE}" opacity="0.95"/>
    <path d="M90 0 L120 30 L90 30 Z" fill="${WARM_AMBER}"/>
    <rect x="18" y="45" width="75" height="9" rx="4" fill="${DEEP_NAVY}" opacity="0.3"/>
    <rect x="18" y="66" width="60" height="9" rx="4" fill="${WARM_AMBER}" opacity="0.8"/>
    <rect x="18" y="87" width="84" height="9" rx="4" fill="${DEEP_NAVY}" opacity="0.3"/>
    <circle cx="102" cy="132" r="18" fill="${WARM_AMBER}"/>
    <path d="M102 120 L105 129 L114 132 L105 135 L102 144 L99 135 L90 132 L99 129 Z" fill="${WHITE}"/>
  </g>
  
  <!-- Main text -->
  <text x="${width * 0.28}" y="${height * 0.45}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="80" font-weight="700" fill="${WHITE}">Protocol<tspan fill="${WARM_AMBER}">Pad</tspan></text>
  
  <!-- Tagline -->
  <text x="${width * 0.28}" y="${height * 0.58}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="28" font-weight="400" fill="${WHITE}" opacity="0.8">AI-Powered Clinical Protocols for</text>
  <text x="${width * 0.28}" y="${height * 0.66}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="28" font-weight="400" fill="${WHITE}" opacity="0.8">Functional Medicine Practitioners</text>
  
  <!-- URL -->
  <text x="${width * 0.28}" y="${height * 0.85}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="22" font-weight="500" fill="${WARM_AMBER}">protocolpad.com</text>
</svg>`;
}

// LinkedIn Banner SVG
function createLinkedInBannerSVG(width = 1584, height = 396) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="liGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${DEEP_NAVY};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2D4A6F;stop-opacity:1" />
    </linearGradient>
    <pattern id="dotPattern" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="15" cy="15" r="1.5" fill="${WHITE}" opacity="0.1"/>
    </pattern>
  </defs>
  
  <rect width="${width}" height="${height}" fill="url(#liGrad)"/>
  <rect width="${width}" height="${height}" fill="url(#dotPattern)"/>
  
  <!-- Decorative elements -->
  <circle cx="${width * 0.92}" cy="${height * 0.3}" r="120" fill="${WARM_AMBER}" opacity="0.15"/>
  <circle cx="${width * 0.88}" cy="${height * 0.7}" r="80" fill="${WARM_AMBER}" opacity="0.1"/>
  
  <!-- Icon -->
  <g transform="translate(${width * 0.06}, ${height * 0.22})">
    <rect x="0" y="0" width="90" height="112" rx="10" fill="${WHITE}" opacity="0.95"/>
    <path d="M67 0 L90 23 L67 23 Z" fill="${WARM_AMBER}"/>
    <rect x="14" y="36" width="56" height="7" rx="3" fill="${DEEP_NAVY}" opacity="0.3"/>
    <rect x="14" y="50" width="45" height="7" rx="3" fill="${WARM_AMBER}" opacity="0.8"/>
    <rect x="14" y="64" width="62" height="7" rx="3" fill="${DEEP_NAVY}" opacity="0.3"/>
    <circle cx="76" cy="98" r="14" fill="${WARM_AMBER}"/>
    <path d="M76 88 L79 95 L86 98 L79 101 L76 108 L73 101 L66 98 L73 95 Z" fill="${WHITE}"/>
  </g>
  
  <!-- Text -->
  <text x="${width * 0.18}" y="${height * 0.52}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="64" font-weight="700" fill="${WHITE}">Protocol<tspan fill="${WARM_AMBER}">Pad</tspan></text>
  <text x="${width * 0.18}" y="${height * 0.72}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="24" font-weight="400" fill="${WHITE}" opacity="0.7">AI-Powered Clinical Protocols for Functional Medicine</text>
</svg>`;
}

// Twitter Header SVG
function createTwitterHeaderSVG(width = 1500, height = 500) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="twGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${DEEP_NAVY};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2D4A6F;stop-opacity:1" />
    </linearGradient>
    <pattern id="twGrid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="${WHITE}" stroke-width="0.5" opacity="0.05"/>
    </pattern>
  </defs>
  
  <rect width="${width}" height="${height}" fill="url(#twGrad)"/>
  <rect width="${width}" height="${height}" fill="url(#twGrid)"/>
  
  <!-- Large decorative amber accent -->
  <circle cx="${width * 0.9}" cy="${height * 0.5}" r="200" fill="${WARM_AMBER}" opacity="0.12"/>
  <circle cx="${width * 0.85}" cy="${height * 0.3}" r="100" fill="${WARM_AMBER}" opacity="0.08"/>
  
  <!-- Central content -->
  <g transform="translate(${width * 0.5}, ${height * 0.5})">
    <!-- Icon left of text -->
    <g transform="translate(-320, -70)">
      <rect x="0" y="0" width="100" height="125" rx="10" fill="${WHITE}" opacity="0.95"/>
      <path d="M75 0 L100 25 L75 25 Z" fill="${WARM_AMBER}"/>
      <rect x="16" y="40" width="62" height="8" rx="4" fill="${DEEP_NAVY}" opacity="0.3"/>
      <rect x="16" y="56" width="50" height="8" rx="4" fill="${WARM_AMBER}" opacity="0.8"/>
      <rect x="16" y="72" width="68" height="8" rx="4" fill="${DEEP_NAVY}" opacity="0.3"/>
      <circle cx="84" cy="108" r="15" fill="${WARM_AMBER}"/>
      <path d="M84 97 L87 105 L95 108 L87 111 L84 119 L81 111 L73 108 L81 105 Z" fill="${WHITE}"/>
    </g>
    
    <!-- Text -->
    <text x="-180" y="15" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="${WHITE}">Protocol<tspan fill="${WARM_AMBER}">Pad</tspan></text>
    <text x="-180" y="60" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="22" font-weight="400" fill="${WHITE}" opacity="0.7">AI-Powered Clinical Protocols</text>
  </g>
</svg>`;
}

// Generate all assets
async function generateAssets() {
  console.log('Generating brand assets...\n');
  
  const assets = [
    { name: 'logo.png', svg: createLogoSVG(1500, 750), width: 1500, height: 750 },
    { name: 'favicon.png', svg: createFaviconSVG(32), width: 32, height: 32 },
    { name: 'app-icon.png', svg: createAppIconSVG(1080), width: 1080, height: 1080 },
    { name: 'og-image.png', svg: createOGImageSVG(1200, 630), width: 1200, height: 630 },
    { name: 'linkedin-banner.png', svg: createLinkedInBannerSVG(1584, 396), width: 1584, height: 396 },
    { name: 'twitter-header.png', svg: createTwitterHeaderSVG(1500, 500), width: 1500, height: 500 },
  ];
  
  for (const asset of assets) {
    const outputPath = path.join(assetsDir, asset.name);
    
    try {
      await sharp(Buffer.from(asset.svg))
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generated: ${asset.name} (${asset.width}x${asset.height})`);
    } catch (error) {
      console.error(`❌ Failed to generate ${asset.name}:`, error.message);
    }
  }
  
  console.log('\n✨ All assets generated in public/assets/');
}

generateAssets();
