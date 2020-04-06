import { UnaryFunction } from '../internal/index';
import Result from '../Result';
import First from './First';

declare function resultToFirst(val: Result): First;
declare function resultToFirst(fn: UnaryFunction<Result>): UnaryFunction<First>;

export default resultToFirst;
