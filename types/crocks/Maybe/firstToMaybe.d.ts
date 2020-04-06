import { UnaryFunction } from '../internal/index';
import First from '../First';
import Maybe from './Maybe';

/**
 * firstToMaybe :: First a -> Maybe a
 * firstToMaybe :: (a -> First b) -> a -> Maybe b
 */
declare function firstToMaybe(val: First): Maybe;
declare function firstToMaybe(fn: UnaryFunction<First>): UnaryFunction<Maybe>;

export default firstToMaybe;
