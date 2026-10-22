const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const staticSrc = path.join(root, '.next', 'static');
const publicSrc = path.join(root, 'public');
const standaloneNextStatic = path.join(root, '.next', 'standalone', '.next', 'static');
const standalonePublic = path.join(root, '.next', 'standalone', 'public');

try {
  if (fs.existsSync(staticSrc)) {
    fs.cpSync(staticSrc, standaloneNextStatic, { recursive: true });
    console.log('[Standalone] Arquivos de estilo e scripts (.next/static) sincronizados com sucesso!');
  }
  if (fs.existsSync(publicSrc)) {
    fs.cpSync(publicSrc, standalonePublic, { recursive: true });
    // Garantir compatibilidade de URLs /videos e /Videos em servidores Linux
    const upperVideos = path.join(standalonePublic, 'Videos');
    const lowerVideos = path.join(standalonePublic, 'videos');
    if (fs.existsSync(upperVideos) && !fs.existsSync(lowerVideos)) {
      try {
        fs.cpSync(upperVideos, lowerVideos, { recursive: true });
      } catch (e) {}
    }
    console.log('[Standalone] Arquivos public sincronizados com sucesso!');
  }
} catch (err) {
  console.error('[Standalone] Erro ao sincronizar assets:', err);
}
