import { PredicateFunction } from "./PredicateFunction";

/** not :: (a -> Boolean) | Pred -> a -> Boolean */
declare const not: <A>(p: PredicateFunction<A>) => PredicateFunction<A>

export default not;
