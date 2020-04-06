/**
 * isIterable :: a -> Boolean
 */
declare function isIterable<T>(val: unknown): val is Iterable<T>;

export default isIterable;
