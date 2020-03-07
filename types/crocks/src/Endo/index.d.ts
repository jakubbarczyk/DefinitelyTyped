export function Endo(val: (...val: any[]) => any): Endo;

export class Endo {
    concat(val: Endo): Endo;
    runWith(val: any): any;
    valueOf(): any;
    static empty(): Endo;
    static of(val: (...val: any[]) => any): Endo;
}
