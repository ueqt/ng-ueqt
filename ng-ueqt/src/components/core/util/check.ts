// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function isNotNil<T>(value: T): value is NonNullable<T> {
  return typeof value !== 'undefined' && value !== null;
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function isNil(value: unknown): value is null | undefined {
  return typeof value === 'undefined' || value === null;
}
