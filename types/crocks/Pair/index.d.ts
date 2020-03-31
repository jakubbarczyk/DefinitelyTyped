import { Arrow } from '../Arrow/index';
import { BinaryFunction, UnaryFunction } from '../internal/index';
import { List } from '../List/index';
import { Star } from '../Star/index';

export function Pair(val1: unknown, val2: unknown): Pair;

export class Pair {
    equals(val: unknown): boolean;
    concat(val: Pair): Pair;
    map(fn: UnaryFunction): Pair;
    bimap(fn1: UnaryFunction, fn2: UnaryFunction): Pair;
    ap(val: Pair): Pair;
    chain(fn: (val: unknown) => Pair): Pair;
    sequence(val: any): any;
    traverse(val: any): any;
    extend(fn: (val: Pair) => any): Pair;
    swap(fn1: UnaryFunction, fn2: UnaryFunction): Pair;
    fst(): any;
    snd(): any;
    toArray(): [any, any];
    merge(fn: BinaryFunction): any;
}

export function branch(val: unknown): Pair;

export function fanout(fn1: UnaryFunction, fn2: UnaryFunction): (val: unknown) => Pair;
export function fanout(fn1: Arrow, fn2: Arrow): Pair;
export function fanout(fn1: Star, fn2: Star): Pair;

export function toPairs(val: object): List;

export function fst(): any;

export function snd(): any;
