export function Arrow(fn: (...args: ReadonlyArray<any>) => any): Arrow;

export class Arrow {
    both(): Arrow;
    compose(val: Arrow): Arrow;
    contramap(fn: (...args: ReadonlyArray<any>) => any): Arrow;
    first(): Arrow;
    map(fn: (...args: ReadonlyArray<any>) => any): Arrow;
    promap(fn1: (...args: ReadonlyArray<any>) => any, fn2: (...args: ReadonlyArray<any>) => any): Arrow;
    runWith(val: unknown): any;
    second(): Arrow;
    static id(): Arrow;
}
