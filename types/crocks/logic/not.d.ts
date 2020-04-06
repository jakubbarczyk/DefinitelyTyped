import type { PredicateFunction } from '../internal/index';
import Pred from '../Pred';

/**
 * not :: ((a -> Boolean) | Pred) -> a -> Boolean
 */
declare function not<A>(p: PredicateFunction<A> | Pred): (x: A) => boolean;

export default not;
