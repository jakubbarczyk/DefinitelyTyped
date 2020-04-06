import { NodeCallback, NullaryFunction, UnaryFunction, VariadicFunction } from '../internal/index';

declare function Async(fn: (reject: UnaryFunction, resolve: UnaryFunction) => any): Async;

declare class Async {
    map(fn: UnaryFunction): Async;
    alt(val: Async): Async;
    bimap(fn1: UnaryFunction, fn2: UnaryFunction): Async;
    ap(val: Async): Async;
    chain(fn: UnaryFunction<Async>): Async;
    coalesce(fn1: UnaryFunction, fn2: UnaryFunction): Async;
    bichain(fn1: UnaryFunction<Async>, fn2: UnaryFunction<Async>): Async;
    swap(fn1: UnaryFunction, fn2: UnaryFunction): Async;
    race(val: Async): Async;
    fork(reject: UnaryFunction, resolve: UnaryFunction): any;
    fork(reject: UnaryFunction, resolve: UnaryFunction, cancel: NullaryFunction): any;
    toPromise(): Promise<any>;
    valueOf(): boolean;
    static fromPromise(fn: VariadicFunction<Promise<any>>): VariadicFunction<Async>;
    static fromNode(fn: VariadicFunction<NodeCallback<any>>): VariadicFunction<Async>;
    static all(val: Async[]): Async;
    static resolveAfter(delay: number, val: unknown): Async;
    static rejectAfter(delay: number, val: unknown): Async;
    static of(val: unknown): Async;
    static Rejected(val: unknown): Async;
    static Resolved(val: unknown): Async;
}

export default Async;
