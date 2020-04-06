type CurriedBinaryFunctionI<R = any> = (arg1: unknown, arg2: unknown) => R;
type CurriedBinaryFunctionII<R = any> = (arg1: unknown) => (arg2: unknown) => R;

export type BinaryFunction<R = any> = CurriedBinaryFunctionI<R> | CurriedBinaryFunctionII<R>;
