import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [192, 512];

const generateSVGIcon = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${size / 4}" fill="#3b82f6"/>
  <path d="M${size * 0.25} ${size * 0.375}L${size * 0.5} ${size * 0.625}L${size * 0.75} ${size * 0.375}" stroke="white" stroke-width="${size * 0.09375}" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="${size * 0.5}" cy="${size * 0.5}" r="${size * 0.0625}" fill="white"/>
</svg>
`.trim();

const publicDir = join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

sizes.forEach((size) => {
  const svg = generateSVGIcon(size);
  const filename = `icon-${size}.svg`;
  fs.writeFileSync(join(publicDir, filename), svg);
  console.log(`Generated ${filename}`);
});

console.log('Icons generated successfully!');
