import { TemplateRef } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UAny = any;

export interface UObject {
  [key: string]: UAny;
}

// Define a property that can also returned by called function
export type UFunctionProp<T> = (...args: UAny[]) => T;

/**
 * A joined type of string and `TemplateRef<void>`.
 */
export type UTSType = string | TemplateRef<void>;
