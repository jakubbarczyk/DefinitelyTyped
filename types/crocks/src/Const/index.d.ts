export function Const(val: any): Const;

export class Const {
    equals(val: unknown): boolean;
    concat(val: Const): Const;
    map(fn: (...args: ReadonlyArray<any>) => any): Const;
    ap(val: Const): Const;
    valueOf(): any;
    static empty(): Const;
    static of(val: unknown): Const;
}
