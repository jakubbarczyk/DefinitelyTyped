/**
 * defaultTo :: a -> b -> a
 */
declare function defaultTo<A, B>(a: A, b: B): A;
declare function defaultTo<A, B>(a: A): (b: B) => A;

export default defaultTo;
