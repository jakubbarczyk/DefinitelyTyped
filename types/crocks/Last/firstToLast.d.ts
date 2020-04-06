import First from '../First';
import { UnaryFunction } from '../internal/index';
import Last from './Last';

declare function firstToLast(val: First): Last;
declare function firstToLast(fn: UnaryFunction<First>): UnaryFunction<Last>;

export default firstToLast;
