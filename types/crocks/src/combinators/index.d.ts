import { BinaryFunction, UnaryFunction, VariadicFunction } from '../internal/index';

export function applyTo(val: unknown, fn: VariadicFunction): any;
export function applyTo(val: unknown): (fn: VariadicFunction) => any;

export function compose2(fn1: BinaryFunction, fn2: UnaryFunction, fn3: UnaryFunction): any;

export function composeB(fn1: VariadicFunction, fn2: VariadicFunction): UnaryFunction;

export function constant(val: unknown): () => any;

export function converge(fn1: BinaryFunction, fn2: UnaryFunction, fn3: UnaryFunction): UnaryFunction;
export function converge(fn1: BinaryFunction, fn2: UnaryFunction): (fn3: UnaryFunction) => UnaryFunction;
export function converge(fn1: BinaryFunction): (fn2: UnaryFunction) => (fn3: UnaryFunction) => UnaryFunction;

export function flip(fn: VariadicFunction): VariadicFunction;

export function identity<T>(val: T): T;

export function psi(fn1: BinaryFunction, fn2: UnaryFunction): BinaryFunction;
export function psi(fn1: BinaryFunction): (fn2: UnaryFunction) => BinaryFunction;

export function substitution(fn1: BinaryFunction, fn2: UnaryFunction, val: unknown): any;
export function substitution(fn1: BinaryFunction, fn2: UnaryFunction): (val: unknown) => any;
export function substitution(fn1: BinaryFunction): (fn2: UnaryFunction) => (val: unknown) => any;
