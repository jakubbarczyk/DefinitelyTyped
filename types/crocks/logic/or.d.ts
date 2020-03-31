import type { PredicateFunction } from './PredicateFunction';

/** or :: (a -> Boolean) | Pred -> (a -> Boolean) | Pred -> a -> Boolean */
declare const or: <A>(p: PredicateFunction<A> | Pred, q: PredicateFunction<A>) => (x: A, y: A) => boolean;

export default or
