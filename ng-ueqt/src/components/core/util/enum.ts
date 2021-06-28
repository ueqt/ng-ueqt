/**
 * 根据枚举值获取枚举key
 *
 * @param myEnum 枚举类型
 * @param enumValue 枚举值
 * @returns 枚举key
 */
export const getEnumKeyByEnumValue = <T extends { [index: string]: string }>(myEnum: T, enumValue: string): keyof T | null => {
  const keys = Object.keys(myEnum).filter(x => myEnum[x] === enumValue);
  return keys.length > 0 ? keys[0] : null;
};
