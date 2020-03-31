import type { BinaryFunction, UnaryFunction } from "crocks/internal";

/**
 * The Phoenix or Starling Prime
 * converge :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
 */
declare function converge(fn1: BinaryFunction, fn2: UnaryFunction, fn3: UnaryFunction): UnaryFunction;
declare function converge(fn1: BinaryFunction, fn2: UnaryFunction): (fn3: UnaryFunction) => UnaryFunction;
declare function converge(fn1: BinaryFunction): (fn2: UnaryFunction) => (fn3: UnaryFunction) => UnaryFunction;

export default converge;
