import { Either } from '../Either';
import { First } from '../First';
import { NullaryFunction, UnaryFunction } from "../internal/index";
import { Last } from '../Last';
import { Pred } from '../Pred';
import { Result } from '../Result';

export interface Nothing extends Maybe {
    (): Nothing;
}

export interface Just extends Maybe {
    (val: unknown): Just;
}

export function Maybe(val: unknown): Maybe;

export class Maybe {
    equals(val: unknown): boolean;
    concat(val: Maybe): Maybe;
    map(fn: UnaryFunction): Maybe;
    alt(val: Maybe): Maybe;
    ap(val: Maybe): Maybe;
    sequence(val: unknown): any;
    traverse(val: unknown): any;
    chain(fn: UnaryFunction<Maybe>): Maybe;
    coalesce(fn1: NullaryFunction, fn2: UnaryFunction): Maybe;
    bichain(fn1: NullaryFunction<Maybe>, fn2: UnaryFunction<Maybe>): Maybe;
    option(val: unknown): any;
    either(fn1: NullaryFunction, fn2: UnaryFunction): any;
    static of(val: unknown): Just;
    static zero(): Nothing;
    static Nothing: (val: unknown) => Nothing;
    static Just: (val: unknown) => Just;
}

export function find(pred: UnaryFunction<boolean> | Pred, val: any[]): Maybe;
export function find(pred: UnaryFunction<boolean> | Pred): (val: any[]) => Maybe;

export function getPath(path: ReadonlyArray<string | number>, val: object): Maybe;
export function getPath(path: ReadonlyArray<string | number>): (val: object) => Maybe;

export function getProp(prop: string | number, val: object): Maybe;
export function getProp(prop: string | number): (val: object) => Maybe;

export function safe(pred: UnaryFunction<boolean> | Pred, val: unknown): Maybe;
export function safe(pred: UnaryFunction<boolean> | Pred): (val: unknown) => Maybe;

// TODO: mind the signature when making the type generic
// safeAfter :: ((b -> Boolean) | Pred) -> (a -> b) -> a -> Maybe b
export function safeAfter(pred: UnaryFunction<boolean> | Pred, fn: UnaryFunction, val: unknown): Maybe;
export function safeAfter(pred: UnaryFunction<boolean> | Pred, fn: UnaryFunction): (val: unknown) => Maybe;
export function safeAfter(pred: UnaryFunction<boolean> | Pred): (fn: UnaryFunction) => (val: unknown) => Maybe;

// TODO: mind the signature when making the type generic
// safeLift :: ((c -> Boolean) | Pred) -> (a -> b) -> c -> Maybe b
export function safeLift(pred: UnaryFunction<boolean> | Pred, fn: UnaryFunction, val: unknown): Maybe;
export function safeLift(pred: UnaryFunction<boolean> | Pred, fn: UnaryFunction): (val: unknown) => Maybe;
export function safeLift(pred: UnaryFunction<boolean> | Pred): (fn: UnaryFunction) => (val: unknown) => Maybe;

export function eitherToMaybe(val: Either): Maybe;
export function eitherToMaybe(fn: UnaryFunction<Either>): UnaryFunction<Maybe>;

export function firstToMaybe(val: First): Maybe;
export function firstToMaybe(fn: UnaryFunction<First>): UnaryFunction<Maybe>;

export function lastToMaybe(val: Last): Maybe;
export function lastToMaybe(fn: UnaryFunction<Last>): UnaryFunction<Maybe>;

export function maybeToArray(val: Maybe): any[];
export function maybeToArray(fn: UnaryFunction<Maybe>): UnaryFunction<any[]>;

export function resultToMaybe(val: Result): Maybe;
export function resultToMaybe(fn: UnaryFunction<Result>): UnaryFunction<Maybe>;
