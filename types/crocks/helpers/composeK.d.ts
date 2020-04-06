/**
 * composeK :: Chain m => ((y -> m z), ..., (a -> m b)) -> a -> m z
 */
declare function composeK<A extends any[], Z>(f: ReadonlyArray<(y: unknown) => Z>, g: (...args: A) => unknown): Z;

export default composeK;
