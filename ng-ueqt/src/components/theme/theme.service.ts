import { Injectable } from '@angular/core';

/**
 * 颜色
 */
export class URgb {
  constructor(
    public red: number,
    public green: number,
    public blue: number) { }
}

/**
 * 皮肤服务
 */
@Injectable({
  providedIn: 'root',
})
export class UThemeService {

  // https://github.com/edelstone/tints-and-shades/blob/master/scripts/tints-and-shades.js

  /**
   * 当前皮肤名
   */
  currentTheme = '';

  /**
   * 颜色变量名
   */
  colorNames: string[] = [];

  /**
   * 所有的皮肤
   */
  themes: { [themeName: string]: string[] } = {
    // bg text primary warn accent
    default: ['#f0f2f5', '#000000', '#1890ff', '#ff0000', '#001520']
  };

  /**
   * 修改皮肤
   * @param themeName 皮肤名
   */
  change(themeName: string): void {
    const theme = this.themes[themeName];
    this.currentTheme = themeName;
    this.use(theme);
  }

  /**
   * pad a hexadecimal string with zeros if it needs it
   * hex字符串前面补0
   * @param num hex字符串
   * @param length 补足长度
   */
  private pad(num: string, length: number): string {
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
  private intToHex(rgbint: number): string {
    return this.pad(Math.min(Math.max(Math.round(rgbint), 0), 255).toString(16), 2);
  }

  /**
   * convert a hex string into an object with red, green, blue numeric properties
   * '501214' => { red: 80, green: 18, blue: 20 }
   * @param colorValue Hex颜色字符串(6位)
   */
  private hexToRgb(colorValue: string): URgb {
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
   * convert one of our rgb color objects to a full hex color string
   * { red: 80, green: 18, blue: 20 } => '501214'
   * @param rgb RGB颜色
   */
  private rgbToHex(rgb: URgb): string {
    return this.intToHex(rgb.red) + this.intToHex(rgb.green) + this.intToHex(rgb.blue);
  }

  /**
   * shade one of our rgb color objects to a distance of i*10%
   * ({ red: 80, green: 18, blue: 20 }, 1) => { red: 72, green: 16, blue: 18 }
   * @param rgb RGB颜色
   * @param i 加几成阴影
   */
  private rgbShade(rgb: URgb, i: number): URgb {
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
  private rgbTint(rgb: URgb, i): URgb {
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
  private rgbContrast(rgb: URgb): URgb {
    return new URgb(
      255 - rgb.red,
      255 - rgb.green,
      255 - rgb.blue
    );
  }

  /**
   * 使用皮肤
   * @param themeColors 皮肤颜色
   */
  private use(themeColors: string[]): void {
    // 提供10种颜色
    this.colorNames = [];
    const typeKey = ['bg', 'text', 'primary', 'warn', 'accent'];
    for (let i = 0; i < themeColors.length; i++) {
      const themeColor = themeColors[i];
      const rgb = this.hexToRgb(themeColor);
      const keyPrefix = '--u-' + typeKey[i];
      this.colorNames.push(keyPrefix);
      document.documentElement.style.setProperty(keyPrefix, themeColor);
      this.colorNames.push(keyPrefix + '-c');
      document.documentElement.style.setProperty(keyPrefix + '-c', '#' + this.rgbToHex(this.rgbContrast(rgb)));
      for (let j = 1; j <= 9; j++) {
        let key = keyPrefix + '-' + j.toString();
        this.colorNames.push(key);
        const shade = this.rgbToHex(this.rgbShade(rgb, j));
        document.documentElement.style.setProperty(key, '#' + shade);
        this.colorNames.push(key + '-c');
        document.documentElement.style.setProperty(key + '-c', '#' + this.rgbToHex(this.rgbContrast(this.hexToRgb(shade))));
        key = keyPrefix + '-' + (j + 9).toString();
        this.colorNames.push(key);
        const tint = this.rgbToHex(this.rgbTint(rgb, j));
        document.documentElement.style.setProperty(key, '#' + tint);
        this.colorNames.push(key + '-c');
        document.documentElement.style.setProperty(key + '-c', '#' + this.rgbToHex(this.rgbContrast(this.hexToRgb(tint))));
      }
    }
  }
}
