export function hasProp(prop: string | number, val: unknown): boolean;
export function hasProp(prop: string | number): (val: unknown) => boolean;

export function hasPropPath(path: ReadonlyArray<string | number>, val: unknown): boolean;
export function hasPropPath(path: ReadonlyArray<string | number>): (val: unknown) => boolean;

// TODO: requires Foldable
// export function hasProps(prop: string | number, val: unknown): boolean;
// export function hasProps(prop: string | number): (val: unknown) => boolean;

// TODO: requires Alt
// export function isAlt(val: unknown): val is Alt;

// TODO: requires Alternative
// export function isAlternative(val: unknown): val is Alternative;

// TODO: requires Applicative
// export function isApplicative(val: unknown): val is Applicative;

// TODO: requires Apply
// export function isApply(val: unknown): val is Apply;

export function isArray(val: unknown): val is Array<any>;

// TODO: requires Bifunctor
// export function isBifunctor(val: unknown): val is Bifunctor;

export function isBoolean(val: unknown): val is boolean;

// TODO: requires Category
// export function isCategory(val: unknown): val is Category;

// TODO: requires Chain
// export function isChain(val: unknown): val is Chain;

// TODO: requires Contravariant
// export function isContravariant(val: unknown): val is Contravariant;

export function isDate(val: unknown): val is Date;

// TODO: requires !undefined
// export function isDefined(val: unknown): val is Defined;

// TODO: requires Empty
// export function isEmpty(val: unknown): val is Empty;

// TODO: requires Extend
// export function isExtend(val: unknown): val is Extend;

export function isFalse(val: unknown): val is false;

// TODO: type union of falsy types is problematic
export function isFalsy(val: unknown): boolean;

// TODO: requires Foldable
// export function isFoldable(val: unknown): val is Foldable;

export function isFunction(val: unknown): val is Function;

// TODO: requires Functor
// export function isFunctor(val: unknown): val is Functor;

export function isInteger(val: unknown): boolean;

export function isIterable(val: unknown): val is Iterable;

export function isMap(val: unknown): boolean;

// TODO: requires Monad
// export function isMonad(val: unknown): val is Monad;

// TODO: requires Monoid
// export function isMonoid(val: unknown): val is Monoid;

export function isNil(val: unknown): val is null;

export function isNumber(val: unknown): val is number;

export function isObject(val: unknown): val is object;

// TODO: requires Plus
// export function isPlus(val: unknown): val is Plus;

// TODO: requires Profunctor
// export function isProfunctor(val: unknown): val is Profunctor;

export function isPromise(val: unknown): val is Promise<any>;

export function isSame(val1: unknown, val2: unknown): boolean;
export function isSame(val1: unknown): (val2: unknown) => boolean;

export function isSameType(val1: unknown, val2: unknown): boolean;
export function isSameType(val1: unknown): (val2: unknown) => boolean;

// TODO: requires Semigroup
// export function isSemigroup(val: unknown): val is Semigroup;

// TODO: requires Semigroupoid
// export function isSemigroupoid(val: unknown): val is Semigroupoid;

// TODO: requires Setoid
// export function isSetoid(val: unknown): val is Setoid;

export function isString(val: unknown): val is string;

export function isSymbol(val: unknown): val is Symbol;

// TODO: requires Traversable
// export function isTraversable(val: unknown): val is Traversable;

export function isTrue(val: unknown): val is true;

// TODO: type union of truthy types is problematic
export function isTruthy(val: unknown): boolean;

export function pathEq(path: ReadonlyArray<string | number>, val: unknown, obj: object): boolean;
export function pathEq(path: ReadonlyArray<string | number>, val: unknown): (obj: object) => boolean;
export function pathEq(path: ReadonlyArray<string | number>): (val: unknown) => (obj: object) => boolean;

// TODO requires Pred
// export function pathSatisfies(path: ReadonlyArray<string | number>, pred: (val: any) => boolean | Pred, obj: object): boolean;
// export function pathSatisfies(path: ReadonlyArray<string | number>, pred: (val: any) => boolean | Pred): (obj: object) => boolean;
// export function pathSatisfies(path: ReadonlyArray<string | number>): (pred: (val: any) => boolean | Pred) => (obj: object) => boolean;

export function propEq(prop: string | number, val: unknown, obj: object): boolean;
export function propEq(prop: string | number, val: unknown): (obj: object) => boolean;
export function propEq(prop: string | number): (val: unknown) => (obj: object) => boolean;

// TODO requires Pred
// export function propSatisfies(prop: string | number, pred: (val: any) => boolean | Pred, obj: object): boolean;
// export function propSatisfies(prop: string | number, pred: (val: any) => boolean | Pred): (obj: object) => boolean;
// export function propSatisfies(prop: string | number): (pred: (val: any) => boolean | Pred) => (obj: object) => boolean;
