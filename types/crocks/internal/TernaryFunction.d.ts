type CurriedTernaryFunctionI<R = any> = (arg1: unknown, arg2: unknown) => (arg3: unknown) => R;
type CurriedTernaryFunctionII<R = any> = (arg1: unknown, arg2: unknown) => (arg3: unknown) => R;
type CurriedTernaryFunctionIII<R = any> = (arg1: unknown) => (arg2: unknown) => (arg3: unknown) => R;

export type TernaryFunction<R = any> = CurriedTernaryFunctionI<R> | CurriedTernaryFunctionII<R> | CurriedTernaryFunctionIII<R>;
