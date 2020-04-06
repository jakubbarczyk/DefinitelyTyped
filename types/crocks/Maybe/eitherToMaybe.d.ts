import { UnaryFunction } from '../internal/index';
import Either from '../Either';
import Maybe from './Maybe';

/**
 * eitherToMaybe :: Either b a -> Maybe a
 * eitherToMaybe :: (a -> Either c b) -> a -> Maybe b
 */
declare function eitherToMaybe(val: Either): Maybe;
declare function eitherToMaybe(fn: UnaryFunction<Either>): UnaryFunction<Maybe>;

export default eitherToMaybe;
