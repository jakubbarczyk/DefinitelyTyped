import { UnaryFunction } from '../internal/index';
import Left from './Left';
import Right from './Right';

declare function Either(val: any): Either;

declare class Either {
    equals(val: unknown): boolean;
    concat(val: Either): Either;
    map(fn: UnaryFunction): Either;
    alt(val: Either): Either;
    bimap(fn1: UnaryFunction, fn2: UnaryFunction): Either;
    ap(val: Either): Either;
    sequence(val: unknown): any;
    traverse(val: unknown): any;
    chain(fn: UnaryFunction<Either>): Either;
    coalesce(fn1: UnaryFunction, fn2: UnaryFunction): Either;
    bichain(fn1: UnaryFunction<Either>, fn2: UnaryFunction<Either>): Either;
    swap(fn1: UnaryFunction<Either>, fn2: UnaryFunction<Either>): Either;
    either(fn1: UnaryFunction, fn2: UnaryFunction): any;
    valueOf(): any;
    static of(val: unknown): Either;
    static Left(val: unknown): Either;
    static Right(val: unknown): Either;
}

export default Either;
