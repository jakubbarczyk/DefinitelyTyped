import { BinaryFunction, UnaryFunction } from '../internal/index';

/**
 * mapReduce :: Foldable f => (a -> b) -> (c -> b -> c) -> c -> f a -> c
 */
declare function mapReduce<A, B, C>(fn1: UnaryFunction<B>, fn2: BinaryFunction<C>, c: C, f: A[]): C;
declare function mapReduce<A, B, C>(fn1: UnaryFunction<B>, fn2: BinaryFunction<C>, c: C): (f: A[]) => C;
declare function mapReduce<A, B, C>(fn1: UnaryFunction<B>, fn2: BinaryFunction<C>): (c: C) => (f: A[]) => C;
declare function mapReduce<A, B, C>(fn1: UnaryFunction<B>): (fn2: BinaryFunction<C>) => (c: C) => (f: A[]) => C;

export default mapReduce;
