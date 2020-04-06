import { UnaryFunction, VariadicFunction } from '../internal/index';

/**
 * unary :: ((*) -> b) -> a -> b
 */
declare function unary(fn: VariadicFunction): UnaryFunction;

export default unary;
