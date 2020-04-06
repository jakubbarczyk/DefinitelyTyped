/**
 * composeS :: Semigroupoid s => (s y z, ..., s a b) -> s a z
 */
declare function composeS<A extends any[], Z>(f: ReadonlyArray<(y: unknown) => Z>, g: (...args: A) => unknown): Z;

export default composeS;
