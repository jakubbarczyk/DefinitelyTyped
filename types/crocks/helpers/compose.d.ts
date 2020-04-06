/**
 * compose :: ((y -> z), ..., (a -> b)) -> a -> z
 */
declare function compose<A extends any[], Z>(f: ReadonlyArray<(y: unknown) => Z>, g: (...args: A) => unknown): Z;

export default compose;
