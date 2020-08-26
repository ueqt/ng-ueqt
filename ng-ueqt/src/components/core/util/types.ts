// tslint:disable-next-line:no-any
export type UAny = any;

export interface UObject {
  [key: string]: UAny;
}

// Define a property that can also returned by called function
export type UFunctionProp<T> = (...args: UAny[]) => T;
