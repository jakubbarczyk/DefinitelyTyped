import { PredicateFunction } from "./PredicateFunction";

/** implies :: (a -> Boolean) | Pred -> (a -> Boolean) -> a -> Boolean */
declare const implies: <A>(p: PredicateFunction<A>, q: PredicateFunction<A>) => (x: A) => boolean;

export default implies;
