import { UnaryFunction } from '../internal/index';

export function Identity(val: unknown): Identity;

export class Identity {
    equals(val: unknown): boolean;
    concat(val: Identity): Identity;
    map(fn: UnaryFunction): Identity;
    ap(val: Identity): Identity;
    sequence(val: unknown): any;
    traverse(val: unknown): any;
    chain(fn: UnaryFunction<Identity>): Identity;
    valueOf(): any;
    static of(val: unknown): Identity;
}
