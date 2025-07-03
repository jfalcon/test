import fs from 'node:fs';
import path from 'node:path';
import { isColorDifferent } from '../src/utility/color';

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

      // these are for dark mode
      const bg = variables?.[':root']?.['--color-card'];
      const fg = variables?.[':root']?.['--color-text'];

      if (bg && fg) {
        // is the colors are too close together that's a fail
        // since that means the text would be hard to see
        expect(isColorDifferent(bg, fg)).toBe(true);
      } else
        expect(false).toBeTruthy();
    });
  });
});
