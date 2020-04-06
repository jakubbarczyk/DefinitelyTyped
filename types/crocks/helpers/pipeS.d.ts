/**
 * pipeS :: Semigroupoid s => (s a b, ..., s y z) -> s a z
 */
declare function pipeS<A extends any[], Z>(f: (...args: A) => unknown, g: ReadonlyArray<(y: unknown) => Z>): Z;

export default pipeS;
