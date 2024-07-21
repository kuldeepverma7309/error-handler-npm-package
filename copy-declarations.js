// copy-declarations.js
const fs = require('fs');
const path = require('path');

const srcPath = path.resolve(__dirname, 'src/index.d.ts');
const destPath = path.resolve(__dirname, 'dist/index.d.ts');

fs.copyFileSync(srcPath, destPath);
console.log('Declaration file copied to dist directory');
