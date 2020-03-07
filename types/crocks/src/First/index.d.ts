import Either from '../Either';
import Last from '../Last';
import Maybe from '../Maybe';
import Result from '../Result';

export function First(val: unknown): First;

export class First {
    equals(val: unknown): boolean;
    concat(val: First): First;
    option(val: unknown): any;
    valueOf(): Maybe;
    static empty(): First;
    static of(val: unknown): First;
}

export function eitherToFirst(val: Either): First;

export function lastToFirst(val: Last): First;

export function maybeToFirst(val: Maybe): First;

export function resultToFirst(val: Result): First;
