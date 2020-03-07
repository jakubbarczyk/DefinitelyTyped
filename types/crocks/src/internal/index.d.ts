export type NodeCallback<T> = (err: Error | null, ...args: ReadonlyArray<T>) => any;

export type NullaryFunction<R = any> = () => R;

export type UnaryFunction<R = any> = (arg: unknown) => R;

type CurriedBinaryFunctionI<R = any> = (arg1: unknown, arg2: unknown) => R;
type CurriedBinaryFunctionII<R = any> = (arg1: unknown) => (arg2: unknown) => R;

export type BinaryFunction<R = any> = CurriedBinaryFunctionI<R> | CurriedBinaryFunctionII<R>;

type CurriedTernaryFunctionI<R = any> = (arg1: unknown, arg2: unknown) => (arg3: unknown) => R;
type CurriedTernaryFunctionII<R = any> = (arg1: unknown, arg2: unknown) => (arg3: unknown) => R;
type CurriedTernaryFunctionIII<R = any> = (arg1: unknown) => (arg2: unknown) => (arg3: unknown) => R;

export type TernaryFunction<R = any> = CurriedTernaryFunctionI<R> | CurriedTernaryFunctionII<R> | CurriedTernaryFunctionIII<R>;

export type VariadicFunction<R = any> = (...args: ReadonlyArray<any>) => R;
