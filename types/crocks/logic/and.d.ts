import type { PredicateFunction } from './PredicateFunction';

/** and :: (a -> Boolean) | Pred -> (a -> Boolean) | Pred -> a -> Boolean */
declare const and: <A>(p: PredicateFunction<A> | Pred, q: PredicateFunction<A>) => (x: A, y: A) => boolean;

export default and
