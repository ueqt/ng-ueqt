import {
  coerceBooleanProperty,
  coerceCssPixelValue,
  _isNumberValue,
} from '@angular/cdk/coercion';
import { UAny, UFunctionProp } from './types';

export const toBoolean = (value: boolean | string): boolean => coerceBooleanProperty(value);

export const toNumber = (
  value: number | string,
  fallbackValue: number = 0
): number => _isNumberValue(value) ? Number(value) : fallbackValue;

export const toCssPixel = (value: number | string): string => coerceCssPixelValue(value);

/**
 * Get the function-property type's value
 */
export const valueFunctionProp = <T>(
  prop: UFunctionProp<T> | T,
  ...args: UAny[]
): T => typeof prop === 'function'
    ? (prop as UFunctionProp<T>)(...args)
    : prop;

const propDecoratorFactory = <T, D>(
  name: string,
  fallback: (v: T) => D
): (target: UAny, propName: string) => void => {
  const propDecorator = (
    target: UAny,
    propName: string,
    originalDescriptor?: TypedPropertyDescriptor<UAny>
  ): UAny => {
    const privatePropName = `$$__${propName}`;

    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      console.warn(
        `The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`
      );
    }

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true,
    });

    return {
      get(): string {
        return originalDescriptor && originalDescriptor.get
          ? originalDescriptor.get.bind(this)()
          : this[privatePropName];
      },
      set(value: T): void {
        if (originalDescriptor && originalDescriptor.set) {
          originalDescriptor.set.bind(this)(fallback(value));
        }
        this[privatePropName] = fallback(value);
      },
    };
  };

  return propDecorator;
};

/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * Why not using @InputBoolean alone without @Input? AOT needs @Input to be visible
 *
 * @howToUse
 * ```
 * @Input() @InputBoolean() visible: boolean = false;
 *
 * // Act as below:
 * // @Input()
 * // get visible() { return this.__visible; }
 * // set visible(value) { this.__visible = value; }
 * // __visible = false;
 * ```
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const InputBoolean = (): UAny => propDecoratorFactory('InputBoolean', toBoolean);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const InputCssPixel = (): UAny => propDecoratorFactory('InputCssPixel', toCssPixel);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const InputNumber = (fallbackValue?: UAny): UAny =>
  propDecoratorFactory('InputNumber', (value: string | number) =>
    toNumber(value, fallbackValue)
  );

export const pxToNumber = (value: string | null): number => {
  if (!value) {
    return 0;
  }

  const match = value.match(/^\d*(\.\d*)?/);

  return match ? Number(match[0]) : 0;
};
