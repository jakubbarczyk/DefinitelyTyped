import { UnaryFunction } from '../internal/index';
import Result from '../Result';
import Maybe from './Maybe';

/**
 * resultToMaybe :: Result e a -> Maybe a
 * resultToMaybe :: (a -> Result e b) -> a -> Maybe b
 */
declare function resultToMaybe(val: Result): Maybe;
declare function resultToMaybe(fn: UnaryFunction<Result>): UnaryFunction<Maybe>;

export default resultToMaybe;
