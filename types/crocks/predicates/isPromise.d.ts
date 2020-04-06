/**
 * isPromise :: a -> Boolean
 */
declare function isPromise<T>(val: unknown): val is Promise<T>;

export default isPromise;
