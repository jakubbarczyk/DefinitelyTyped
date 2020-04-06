/**
 * pipeP :: Promise p => ((a -> p b d), ..., (y -> p z d)) -> a -> p z d
 */
declare function pipeP<A extends any[], Z>(f: (...args: A) => unknown, g: ReadonlyArray<(y: unknown) => Z>): Z;

export default pipeP;
