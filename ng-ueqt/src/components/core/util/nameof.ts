// from ts-simaple-nameof
function cleanseAssertionOperators<T>(parsedName: string): keyof T {
  return parsedName.replace(/[?!]/g, '') as (keyof T);
}

/**
 * 获取变量名快捷定义
 */
export function nameofAllDefinition<T extends object>(TCreator: new () => T): any {
  return (nameFunction: (obj: T) => any): string => {
    return nameofAll<T>(TCreator, nameFunction);
  };
}

/**
 * 获取变量名，包括类名
 */
export function nameofAll<T extends object>(
  TCreator: new () => T,
  nameFunction: ((obj: T) => any) | (new (...params: any[]) => T)
): string {
  return ('ueqt___' + TCreator.name + '__' + nameof<T>(nameFunction)) as any;
}

/**
 * 获取变量名快捷定义
 */
export function nameofDefinition<T extends object>(TCreator: new () => T): any {
  return (nameFunction: (obj: T) => any): keyof T => {
    return nameof<T>(nameFunction);
  };
}

/**
 * 获取变量名
 */
export function nameof<T extends object>(nameFunction: ((obj: T) => any) | (new (...params: any[]) => T)): keyof T {
  const fnStr = nameFunction.toString();

  // ES6 class name
  // "class ClassName { ... "
  if (fnStr.startsWith('class ')
    // Theoretically colud, for some ill-advised reason, be "class => class.prop".
    && !fnStr.startsWith('class =>')) {
    return cleanseAssertionOperators(fnStr.substring('class '.length, fnStr.indexOf(' {')));
  }

  // ES6 prop selector:
  // "x => x.prop"
  if (fnStr.includes('=>')) {
    return cleanseAssertionOperators(fnStr.substring(fnStr.indexOf('.') + 1));
  }

  // ES6 function
  // "function (p) { return p.xx; }"
  // "function(p){return p.xx}" 编译后
  if (fnStr.startsWith('function')) {
    let result = fnStr.substring(fnStr.indexOf('.') + 1);
    if (result.includes(';')) {
      result = result.substring(0, result.indexOf(';')).trim();
    } else {
      // 编译后;会被优化掉
      result = result.substring(0, result.indexOf('}')).trim();
    }
    return cleanseAssertionOperators(result);
  }

  // // ES5 class name
  // // "function ClassName() { ..."
  // if (fnStr.startsWith('function')) {
  //   return cleanseAssertionOperators(fnStr.substring('function '.length, fnStr.indexOf('(')));
  // }

  // Invalid function
  throw new Error('nameof: Invalid function.');
}
