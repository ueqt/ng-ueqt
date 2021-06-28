/**
 * 暂停线程多少毫秒
 */
export const sleep = (ms: number): Promise<unknown> => new Promise(resolve => setTimeout(resolve, ms));
