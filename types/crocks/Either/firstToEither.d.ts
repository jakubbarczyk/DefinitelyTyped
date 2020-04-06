import First from '../First';
import { UnaryFunction } from '../internal/index';
import Either from './Either';

/**
 * firstToEither :: c -> First a -> Either c a
 * firstToEither :: c -> (a -> First b) -> a -> Either c a
 */
declare function firstToEither(val: First): Either;
declare function firstToEither(fn: UnaryFunction<First>): UnaryFunction<Either>;

export default firstToEither;
