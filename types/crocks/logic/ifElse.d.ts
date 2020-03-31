import { PredicateFunction } from "./PredicateFunction";

/** ifElse :: (a -> Boolean) | Pred -> (a -> b) -> (a -> c) -> a -> (a | c) */
declare const ifElse: <A, B, C>(p: PredicateFunction<A>, f: (x: A) => B, g: (x: A) => C) => (x: A) => A | C;

export default ifElse;
