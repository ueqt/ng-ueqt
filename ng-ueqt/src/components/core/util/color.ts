/**
 * hex 转 rgba
 * @param hexValue hex值
 * @param opacity 透明度
 */
export function hexToRgb(hexValue: string, opacity: string): string {
  const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hex = hexValue.replace(rgx, (m, colorR: string, colorG: string, colorB: string) => {
    return colorR + colorR + colorG + colorG + colorB + colorB;
  });
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = parseInt(rgb[1], 16);
  const g = parseInt(rgb[2], 16);
  const b = parseInt(rgb[3], 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
}
