/**
 * pipeK :: Chain m => ((a -> m b), ..., (y -> m z)) -> a -> m z
 */
declare function pipeK<A extends any[], Z>(f: (...args: A) => unknown, g: ReadonlyArray<(y: unknown) => Z>): Z;

export default pipeK;
