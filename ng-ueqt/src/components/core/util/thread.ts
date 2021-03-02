/**
 * 暂停线程多少毫秒
 */
export function sleep(ms: number): Promise<unknown> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
