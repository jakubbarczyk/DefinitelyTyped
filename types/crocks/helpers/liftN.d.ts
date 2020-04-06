import { VariadicFunction } from '../internal/index';

/**
 * liftN :: Applicative m => Number -> ((*) -> a) -> (*m) -> m a
 */
declare function liftN(n: number, fn: VariadicFunction): VariadicFunction;

export default liftN;
