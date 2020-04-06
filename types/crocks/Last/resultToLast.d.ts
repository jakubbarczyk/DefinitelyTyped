import { UnaryFunction } from '../internal/index';
import Result from '../Result';
import Last from './Last';

declare function resultToLast(val: Result): Last;
declare function resultToLast(fn: UnaryFunction<Result>): UnaryFunction<Last>;

export default resultToLast;
