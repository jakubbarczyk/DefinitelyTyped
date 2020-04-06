import { UnaryFunction } from '../internal/index';
import Last from '../Last';
import First from './First';

declare function lastToFirst(val: Last): First;
declare function lastToFirst(fn: UnaryFunction<Last>): UnaryFunction<First>;

export default lastToFirst;
