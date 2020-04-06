/**
 * binary :: ((*) -> c) -> a -> b -> c
 */
declare function binary<A, B, C>(fn: (...args: ReadonlyArray<any>) => C): (a: A, b: B) => C;
declare function binary<A, B, C>(fn: (...args: ReadonlyArray<any>) => C): (a: A) => (b: B) => C;

export default binary;
