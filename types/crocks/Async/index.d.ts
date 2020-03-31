import { Either } from '../Either/index';
import { First } from '../First/index';
import { NodeCallback, NullaryFunction, UnaryFunction, VariadicFunction } from '../internal/index';
import { Last } from '../Last/index';
import { Maybe } from '../Maybe/index';
import { Result } from '../Result/index';

export function Async(fn: (...args: ReadonlyArray<any>) => any): Async;

export class Async {
    map(fn: UnaryFunction): Async;
    alt(val: Async): Async;
    bimap(fn1: UnaryFunction, fn2: UnaryFunction): Async;
    ap(val: Async): Async;
    chain(fn: UnaryFunction<Async>): Async;
    coalesce(fn1: UnaryFunction, fn2: UnaryFunction): Async;
    bichain(fn1: UnaryFunction<Async>, fn2: UnaryFunction<Async>): Async;
    swap(fn1: UnaryFunction, fn2: UnaryFunction): Async;
    race(val: Async): Async;
    fork(reject: UnaryFunction, resolve: UnaryFunction): any;
    fork(reject: UnaryFunction, resolve: UnaryFunction, cancel: NullaryFunction): any;
    toPromise(): Promise<any>;
    valueOf(): boolean;
    static fromPromise(fn: VariadicFunction<Promise<any>>): VariadicFunction<Async>;
    static fromNode(fn: VariadicFunction<NodeCallback<any>>): VariadicFunction<Async>;
    static all(val: Async[]): Async;
    static resolveAfter(delay: number, val: unknown): Async;
    static rejectAfter(delay: number, val: unknown): Async;
    static of(val: unknown): Async;
    static Rejected(): Async;
    static Resolved(): Async;
}

export function race(val: Async): Async;

export function asyncToPromise(val: Async): Promise<any>;
export function asyncToPromise(fn: UnaryFunction<Async>): UnaryFunction<Promise<any>>;

export function eitherToAsync(val: Either): Async;
export function eitherToAsync(fn: UnaryFunction<Either>): UnaryFunction<Async>;

export function firstToAsync(val: First): Async;
export function firstToAsync(fn: UnaryFunction<First>): UnaryFunction<Async>;

export function lastToAsync(val: Last): Async;
export function lastToAsync(fn: UnaryFunction<Last>): UnaryFunction<Async>;

export function maybeToAsync(val: Maybe): Async;
export function maybeToAsync(fn: UnaryFunction<Maybe>): UnaryFunction<Async>;

export function resultToAsync(val: Result): Async;
export function resultToAsync(fn: UnaryFunction<Result>): UnaryFunction<Async>;
