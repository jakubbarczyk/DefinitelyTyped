import { UnaryFunction } from '../internal/index';
import Maybe from './Maybe';

/**
 * maybeToArray :: Maybe a -> [ a ]
 * maybeToArray :: (a -> Maybe b) -> a -> [ b ]
 */
declare function maybeToArray(val: Maybe): any[];
declare function maybeToArray(fn: UnaryFunction<Maybe>): UnaryFunction<any[]>;

export default maybeToArray;
