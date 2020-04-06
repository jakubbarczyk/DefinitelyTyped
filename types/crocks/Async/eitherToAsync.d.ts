import Either from '../Either';
import { UnaryFunction } from '../internal/index';
import Async from './Async';

/**
 * eitherToAsync :: Either b a -> Async b a
 * eitherToAsync :: (a -> Either c b) -> a -> Async c b
 */
declare function eitherToAsync(val: Either): Async;
declare function eitherToAsync(fn: UnaryFunction<Either>): UnaryFunction<Async>;

export default eitherToAsync;
