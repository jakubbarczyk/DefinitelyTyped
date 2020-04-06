/**
 * composeP :: Promise p => ((y -> p z c), ..., (a -> p b c)) -> a -> p z c
 */
declare function composeP<A extends any[], Z>(f: ReadonlyArray<(y: unknown) => Promise<Z>[]>, g: (...args: Promise<A>[]) => unknown): Promise<Z>;

export default composeP;
