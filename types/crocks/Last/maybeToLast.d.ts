import { UnaryFunction } from '../internal/index';
import Maybe from '../Maybe';
import Last from './Last';

declare function maybeToLast(val: Maybe): Last;
declare function maybeToLast(fn: UnaryFunction<Maybe>): UnaryFunction<Last>;

export default maybeToLast;
