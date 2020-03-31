import { BinaryFunction, UnaryFunction } from '../internal/index';

export function Equiv(fn: (val1: unknown, val2: unknown) => boolean): Equiv;

export class Equiv {
    concat(val: Equiv): Equiv;
    contramap(fn: UnaryFunction): Equiv;
    compareWith(val1: unknown, val2: unknown): boolean;
    compareWith(val1: unknown): (val2: unknown) => boolean;
    valueOf(): BinaryFunction<boolean>;
    static empty(): Equiv;
}
