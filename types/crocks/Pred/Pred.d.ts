import { UnaryFunction } from '../internal/index';

declare function Pred(fn: UnaryFunction<boolean>): Pred;

declare class Pred {
    concat(val: Pred): Pred;
    contramap(fn: UnaryFunction): Pred;
    valueOf(): UnaryFunction<boolean>;
    runWith(val: unknown): boolean;
    static empty(): Pred;
}

export default Pred;
