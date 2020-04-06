/**
 * pipe :: ((a -> b), ..., (y -> z)) -> a -> z
 */
declare function pipe<A extends any[], Z>(f: (...args: A) => unknown, g: ReadonlyArray<(y: unknown) => Z>): Z;

export default pipe;
