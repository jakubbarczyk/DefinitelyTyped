import { First } from '../First';
import { UnaryFunction } from '../internal/index';
import { Last } from '../Last';
import { Maybe } from '../Maybe';
import { Result } from '../Result';

export function Left(val: unknown): Left;

export class Left extends Either {
    equals(val: unknown): boolean;
    concat(val: Either): Either;
    map(fn: UnaryFunction): Left;
    valueOf(): any;
}

export function Right(val: unknown): Right;

export class Right extends Either {
    equals(val: unknown): boolean;
    concat(val: Either): Either;
    map(fn: UnaryFunction): Right;
    valueOf(): any;
}

export function Either(val: any): Either;

export class Either {
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
    static of(val: unknown): Right;
    static Left(val: unknown): Left;
    static Right(val: unknown): Right;
}

export function firstToEither(val: First): Either;
export function firstToEither(fn: UnaryFunction<First>): UnaryFunction<Either>;

export function lastToEither(val: Last): Either;
export function lastToEither(fn: UnaryFunction<Last>): UnaryFunction<Either>;

export function maybeToEither(val: Maybe): Either;
export function maybeToEither(fn: UnaryFunction<Maybe>): UnaryFunction<Either>;

export function resultToEither(val: Result): Either;
export function resultToEither(fn: UnaryFunction<Result>): UnaryFunction<Either>;
