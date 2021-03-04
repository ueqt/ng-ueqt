// /**
//  * hex 转 rgba
//  * @param hexValue hex值
//  * @param opacity 透明度
//  */
// export function hexToRgb(hexValue: string, opacity: string): string {
//   const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   const hex = hexValue.replace(rgx, (m, colorR: string, colorG: string, colorB: string) => {
//     return colorR + colorR + colorG + colorG + colorB + colorB;
//   });
//   const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   const r = parseInt(rgb[1], 16);
//   const g = parseInt(rgb[2], 16);
//   const b = parseInt(rgb[3], 16);
//   return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
// }

/**
 * 颜色
 */
export class URgb {
  constructor(
    public red: number,
    public green: number,
    public blue: number) { }
}

function trim(str: string): string {
  return str.replace(/^\s+|\s+$/gm, '');
}

export function rgbaToHex(rgba: string): string {
  const inParts = rgba.substring(rgba.indexOf('(')).split(',');
  const r = parseInt(trim(inParts[0].substring(1)), 10);
  const g = parseInt(trim(inParts[1]), 10);
  const b = parseInt(trim(inParts[2]), 10);
  const a = +parseFloat(trim(inParts[3].substring(0, inParts[3].length - 1))).toFixed(2);
  const outParts = [
    r.toString(16),
    g.toString(16),
    b.toString(16),
    Math.round(a * 255).toString(16).substring(0, 2)
  ];

  // Pad single-digit output values
  outParts.forEach((part, i) => {
    if (part.length === 1) {
      outParts[i] = '0' + part;
    }
  });

  return ('#' + outParts.join(''));
}

/**
 * 获取变量颜色
 * @param variableName --xxx
 */
export function getVariableColorValue(variableName: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName);
}

/**
 * 任意颜色字符串转换成实际的hex颜色
 * @param anyColorString 任意颜色字符串
 */
export function getHexColor(anyColorString: string): string {
  if (anyColorString.includes('rgba')) {
    return rgbaToHex(anyColorString);
  }
  if (anyColorString.startsWith('var')) {
    return getVariableColorValue(anyColorString.trim().substr(4, anyColorString.trim().length - 5));
  }
  if (anyColorString.startsWith('--')) {
    return getVariableColorValue(anyColorString);
  }
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.fillStyle = anyColorString;
  return ctx.fillStyle;
}

/**
 * convert a hex string into an object with red, green, blue numeric properties
 * '501214' => { red: 80, green: 18, blue: 20 }
 * @param colorValue Hex颜色字符串(6位)
 */
export function hexToRgb(colorValue: string): URgb {
  if (colorValue.startsWith('#')) {
    colorValue = colorValue.substr(1, 6);
  }
  return new URgb(
    parseInt(colorValue.substr(0, 2), 16),
    parseInt(colorValue.substr(2, 2), 16),
    parseInt(colorValue.substr(4, 2), 16)
  );
}

/**
 * pad a hexadecimal string with zeros if it needs it
 * hex字符串前面补0
 * @param num hex字符串
 * @param length 补足长度
 */
function pad(num: string, length: number): string {
  let str = '' + num;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}

/**
 * RGB数字转Hex字符串
 * @param rgbint RGB数字
 */
export function intToHex(rgbint: number): string {
  return pad(Math.min(Math.max(Math.round(rgbint), 0), 255).toString(16), 2);
}

/**
 * convert one of our rgb color objects to a full hex color string
 * { red: 80, green: 18, blue: 20 } => '#501214'
 * @param rgb RGB颜色
 */
export function rgbToHex(rgb: URgb): string {
  return '#' + intToHex(rgb.red) + intToHex(rgb.green) + intToHex(rgb.blue);
}

/**
 * shade one of our rgb color objects to a distance of i*10%
 * ({ red: 80, green: 18, blue: 20 }, 1) => { red: 72, green: 16, blue: 18 }
 * @param rgb RGB颜色
 * @param i 加几成阴影
 */
export function rgbShade(rgb: URgb, i: number): URgb {
  return new URgb(
    rgb.red * (1 - 0.1 * i),
    rgb.green * (1 - 0.1 * i),
    rgb.blue * (1 - 0.1 * i)
  );
}

/**
 * tint one of our rgb color objects to a distance of i*10%
 * ({ red: 80, green: 18, blue: 20 }, 1) => { red: 98, green: 42, blue: 44 }
 * @param rgb RGB颜色
 * @param i 加几成色调
 */
export function rgbTint(rgb: URgb, i): URgb {
  return new URgb(
    rgb.red + (255 - rgb.red) * i * 0.1,
    rgb.green + (255 - rgb.green) * i * 0.1,
    rgb.blue + (255 - rgb.blue) * i * 0.1
  );
}

/**
 * 取反色
 * @param rgb RGB颜色
 */
export function rgbContrast(rgb: URgb): URgb {
  return new URgb(
    255 - rgb.red,
    255 - rgb.green,
    255 - rgb.blue
  );
}

/**
 * 任意颜色转黑白对比色
 * @param anyColorString 任意颜色
 * @param threshold 阈值
 */
export function getContrastHex(anyColorString: string, threshold = 128): string {
  const hexColor = getHexColor(anyColorString);
  const rgb = hexToRgb(hexColor);
  const result = ((rgb.red * 299) + (rgb.green * 587) + (rgb.blue * 114)) / 1000;
  return result >= threshold ? '#000000' : '#ffffff';
}
