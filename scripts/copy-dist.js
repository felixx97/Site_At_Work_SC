const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const nextDir = path.join(root, '.next');
const staticDir = path.join(nextDir, 'static');
const distDir = path.join(root, 'dist');
const distNextDir = path.join(distDir, '_next');
const distStaticDir = path.join(distNextDir, 'static');
const publicDir = path.join(root, 'public');

try {
  // 1. Ensure dist exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // 2. Copy .next/static into dist/_next/static (where LiteSpeed looks for /_next/static/)
  if (fs.existsSync(staticDir)) {
    if (!fs.existsSync(distNextDir)) {
      fs.mkdirSync(distNextDir, { recursive: true });
    }
    fs.cpSync(staticDir, distStaticDir, { recursive: true });
    fs.cpSync(staticDir, path.join(distDir, 'static'), { recursive: true });
    console.log('[Hostinger Build] _next/static sincronizado em dist/_next/static!');
  }

  // 3. Copy public assets into dist (images, favicon, llms.txt)
  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, distDir, { recursive: true });
    console.log('[Hostinger Build] public sincronizado em dist!');
  }

  // 4. Standalone support (if Next.js runs as standalone Node server)
  const standaloneDir = path.join(nextDir, 'standalone');
  if (fs.existsSync(standaloneDir)) {
    const standaloneNextStatic = path.join(standaloneDir, '.next', 'static');
    const standalonePublic = path.join(standaloneDir, 'public');
    if (fs.existsSync(staticDir)) {
      fs.cpSync(staticDir, standaloneNextStatic, { recursive: true });
    }
    if (fs.existsSync(publicDir)) {
      fs.cpSync(publicDir, standalonePublic, { recursive: true });
    }
    console.log('[Hostinger Build] Arquivos sincronizados para standalone!');
  }
} catch (err) {
  console.error('[Hostinger Build] Erro no script de cópia:', err);
}
