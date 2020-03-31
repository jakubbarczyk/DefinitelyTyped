export function Assign(val: object): Assign;

export class Assign {
    equals(val: unknown): boolean;
    concat(val: Assign): Assign;
    valueOf(): object;
    static empty(): Assign;
}
