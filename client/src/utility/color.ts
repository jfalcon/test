/**
 * Parses a color string (#RGB, #RRGGBB, rgb(), rgba()) into RGB values.
 */
export function parseColor(color: string): [number, number, number] {
  color = color.trim();

  if (color.startsWith('#')) {
    let hex = color.slice(1);

    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    if (hex.length !== 6) return [-1, -1, -1];

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return [r, g, b];
  } else {
    const rgbMatch = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);

    if (rgbMatch) {
      const r = parseInt(rgbMatch[1], 10);
      const g = parseInt(rgbMatch[2], 10);
      const b = parseInt(rgbMatch[3], 10);

      return [r, g, b];
    } else
      return [-1, -1, -1];
  }
}

/**
 * Compares two colors and returns true if they differ by more than the given percent tolerance.
 */
export function isColorDifferent(color1: string, color2: string, tolerance = 10): boolean {
  const [r1, g1, b1] = parseColor(color1);
  const [r2, g2, b2] = parseColor(color2);

  const t = (255 * tolerance) / 100;

  return (
    Math.abs(r1 - r2) > t || Math.abs(g1 - g2) > t || Math.abs(b1 - b2) > t
  );
}
