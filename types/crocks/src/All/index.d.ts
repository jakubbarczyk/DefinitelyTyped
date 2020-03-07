export function All(val: unknown): All;

export class All {
    equals(val: unknown): boolean;
    concat(val: All): All;
    valueOf(): boolean;
    static empty(): All;
    static of(val: unknown): All;
}
