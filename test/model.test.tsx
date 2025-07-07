import fs from 'node:fs';
import path from 'node:path';

// just a helper function since jsdom cannot read any variable not explicity set
// so rather than go through the DOM to test this, just go to the source directly
function isImageStyleSet(filePath: string): boolean {
  const scss = fs.readFileSync(path.resolve(filePath), 'utf-8');

  // remove single-line comments and comment blocks before searching
  const clean = scss.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
  const pattern = /([^{]*\bimg\b[^,{]*)\s*\{([^}]*)\}/gi;

  let match;
  while ((match = pattern.exec(clean))) {
    const body = match[2].trim();
    if (body.length > 0) return true;
  }

  return false;
}

describe('Model Tests', () => {
  it('the model should have set image styles', () => {
    const result = isImageStyleSet('./src/styles/Theme.scss');
    expect(result).toBeTruthy();
  });
});
