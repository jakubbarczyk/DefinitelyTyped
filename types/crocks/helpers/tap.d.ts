/**
 * tap :: (a -> b) -> a -> a
 */
declare function tap<A, B>(fn: (a: A) => B): (a: A) => A;

export default tap;
