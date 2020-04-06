import Either from '../Either';
import { UnaryFunction } from '../internal/index';
import Last from './Last';

declare function eitherToLast(val: Either): Last;
declare function eitherToLast(fn: UnaryFunction<Either>): UnaryFunction<Last>;

export default eitherToLast;
