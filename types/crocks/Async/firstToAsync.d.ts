import First from '../First';
import { UnaryFunction } from '../internal/index';
import Async from './Async';

/**
 * firstToAsync :: e -> First a -> Async e a
 * firstToAsync :: e -> (a -> First b) -> a -> Async e b
 */
declare function firstToAsync(val: First): Async;
declare function firstToAsync(fn: UnaryFunction<First>): UnaryFunction<Async>;

export default firstToAsync;
