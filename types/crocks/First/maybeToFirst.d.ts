import { UnaryFunction } from '../internal/index';
import Maybe from '../Maybe';
import First from './First';

declare function maybeToFirst(val: Maybe): First;
declare function maybeToFirst(fn: UnaryFunction<Maybe>): UnaryFunction<First>;

export default maybeToFirst;
