/**
 * getPathOr :: a -> [ (String | Integer) ] -> b -> a
 */
declare function getPathOr<A extends any, B>(a: A, p: ReadonlyArray<string | number>, b: B): A;
declare function getPathOr<A extends any, B>(a: A, p: ReadonlyArray<string | number>): (b: B) => A;
declare function getPathOr<A extends any, B>(a: A): (p: ReadonlyArray<string | number>) => (b: B) => A;

export default getPathOr;
