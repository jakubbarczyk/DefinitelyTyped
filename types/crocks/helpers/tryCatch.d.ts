import { VariadicFunction } from '../internal/VariadicFunction';
import Result from '../Result';

/**
 * tryCatch :: ((*) -> b) -> (*) -> Result e b
 */
declare function tryCatch(fn: VariadicFunction): VariadicFunction<Result>;

export default tryCatch;
