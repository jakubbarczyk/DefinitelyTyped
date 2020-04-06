import { VariadicFunction } from '../internal/VariadicFunction';

/**
 * once :: ((*) -> a) -> ((*) -> a)
 */
declare function once(fn: VariadicFunction): VariadicFunction;

export default once;
