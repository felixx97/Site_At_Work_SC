const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'out');
const dest = path.join(__dirname, '..', 'dist');

try {
  if (fs.existsSync(src)) {
    if (fs.existsSync(dest)) {
      fs.rmSync(dest, { recursive: true, force: true });
    }
    fs.cpSync(src, dest, { recursive: true });
    console.log('[Hostinger Build] Pasta dist gerada com sucesso a partir de out!');
  } else {
    console.warn('[Hostinger Build] Aviso: Pasta out não encontrada.');
  }
} catch (err) {
  console.error('[Hostinger Build] Erro ao sincronizar out para dist:', err);
  process.exit(1);
}
