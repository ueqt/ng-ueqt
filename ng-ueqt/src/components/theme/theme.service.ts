import { Injectable } from '@angular/core';
import { hexToRgb, rgbContrast, rgbShade, rgbTint, rgbToHex } from '../core/util';

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
   * 使用皮肤
   * @param themeColors 皮肤颜色
   */
  private use(themeColors: string[]): void {
    // 提供10种颜色
    this.colorNames = [];
    const typeKey = ['bg', 'text', 'primary', 'warn', 'accent'];
    for (let i = 0; i < themeColors.length; i++) {
      const themeColor = themeColors[i];
      const rgb = hexToRgb(themeColor);
      const keyPrefix = '--u-' + typeKey[i];
      this.colorNames.push(keyPrefix);
      document.documentElement.style.setProperty(keyPrefix, themeColor);
      this.colorNames.push(keyPrefix + '-c');
      document.documentElement.style.setProperty(keyPrefix + '-c', rgbToHex(rgbContrast(rgb)));
      for (let j = 1; j <= 9; j++) {
        let key = keyPrefix + '-' + j.toString();
        this.colorNames.push(key);
        const shade = rgbToHex(rgbShade(rgb, j));
        document.documentElement.style.setProperty(key, shade);
        this.colorNames.push(key + '-c');
        document.documentElement.style.setProperty(key + '-c', rgbToHex(rgbContrast(hexToRgb(shade))));
        key = keyPrefix + '-' + (j + 9).toString();
        this.colorNames.push(key);
        const tint = rgbToHex(rgbTint(rgb, j));
        document.documentElement.style.setProperty(key, tint);
        this.colorNames.push(key + '-c');
        document.documentElement.style.setProperty(key + '-c', rgbToHex(rgbContrast(hexToRgb(tint))));
      }
    }
  }
}
