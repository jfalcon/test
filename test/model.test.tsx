import fs from 'node:fs';
import path from 'node:path';

type CssVarMap = Record<string, string>;
type ScopeVarsMap = Record<string, CssVarMap>;

// just a helper function since jsdom cannot read any variable not explicity set
// so rather than go through the DOM to test this, just go to the source directly
function extractCssVariables(filePath: string): ScopeVarsMap {
  let content = fs.readFileSync(path.resolve(filePath), 'utf-8');

  // remove single-line comments and comment blocks
  content = content.replace(/\/\/.*$/gm, '');
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');

  const scopeVarMap: ScopeVarsMap = {};

  // match selector blocks (stop at matching closing brace)
  const blockRegex = /([^{]+?)\s*\{\s*([^{}]*?)\s*\}/gs;

  let blockMatch: RegExpExecArray | null;
  while ((blockMatch = blockRegex.exec(content))) {
    const selector = blockMatch[1].trim();
    const blockContent = blockMatch[2];

    const vars: CssVarMap = {};
    const varRegex = /--([\w-]+)\s*:\s*([^;]+);/g;
    let varMatch: RegExpExecArray | null;

    while ((varMatch = varRegex.exec(blockContent))) {
      const [, varName, varValue] = varMatch;
      vars[`--${varName}`] = varValue.trim();
    }

    if (Object.keys(vars).length > 0) {
      scopeVarMap[selector] = vars;
    }
  }

  return scopeVarMap;
}

describe('Model Tests', () => {
  describe('DOM color difference', () => {
    it('dark mode colors should contrast', async () => {
      const variables = extractCssVariables('./src/styles/_variables.scss');

      // this is for dark mode
      const fg = (variables?.[':root']?.['--color-text'] || '').toLowerCase();

      // to pull this off the AI will need to rotate the color on the HSL color wheel, adjust its
      // saturation and lightness (while ignoring any alpha channel) and keep the original format
      if (fg) {
        // HSL (180, 9%, 7.1%), also, the color is #101414, but we allow for rounding errors
        expect((fg === '#101313') || (fg === '#101414') || (fg === '#101515')).toBe(true);
      } else
        expect(false).toBeTruthy();
    });
  });
});
