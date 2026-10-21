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
    console.log('[Standalone] Arquivos public sincronizados com sucesso!');
  }
} catch (err) {
  console.error('[Standalone] Erro ao sincronizar assets:', err);
}
