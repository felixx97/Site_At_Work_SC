const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'out');
const nextDir = path.join(root, '.next');
const distDir = path.join(root, 'dist');

try {
  const source = fs.existsSync(outDir) ? outDir : (fs.existsSync(nextDir) ? nextDir : null);
  if (source) {
    if (fs.existsSync(distDir)) {
      fs.rmSync(distDir, { recursive: true, force: true });
    }
    fs.cpSync(source, distDir, { recursive: true });
    console.log(`[Hostinger Build] Pasta dist gerada com sucesso a partir de ${path.basename(source)}!`);
  } else {
    console.warn('[Hostinger Build] Aviso: Nenhuma pasta de build encontrada.');
  }
} catch (err) {
  console.error('[Hostinger Build] Erro ao sincronizar para dist:', err);
}
