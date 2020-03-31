import { PredicateFunction } from "./PredicateFunction";

/** unless :: (a -> Boolean) | Pred -> (a -> b) -> a | b */
declare const unless: <A, B>(p: PredicateFunction<A>, f: (x: A) => B) => A|B

export default unless;
