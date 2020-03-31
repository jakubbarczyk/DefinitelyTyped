import { PredicateFunction } from "./PredicateFunction";

/** when :: (a -> Boolean) | Pred -> (a -> b) -> a -> b | a */
declare function when<A, B>(p: PredicateFunction<A>, f: (x: A) => B): (x: A) => A|B;

export default when;
