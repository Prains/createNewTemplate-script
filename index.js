const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf-8', () => {});

const normalize = fs.readFileSync('normalize.css', 'utf-8', () => {});

fs.mkdir('../newTemplate', () => {
  fs.writeFile('../newTemplate/index.html', `${html}`, () => {});
  fs.writeFile('../newTemplate/index.scss', '', () => {});
  fs.writeFile('../newTemplate/normalize.css', `${normalize}`, () => {})
  fs.writeFile('../newTemplate/index.js', '', () => {});
});
