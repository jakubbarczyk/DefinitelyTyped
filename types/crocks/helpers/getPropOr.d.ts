/**
 * getPropOr :: a -> (String | Integer) -> b -> a
 */
declare function getPropOr<A extends any, B>(a: A, p: string | number, b: B): A;
declare function getPropOr<A extends any, B>(a: A, p: string | number): (b: B) => A;
declare function getPropOr<A extends any, B>(a: A): (p: string | number) => (b: B) => A;

export default getPropOr;
