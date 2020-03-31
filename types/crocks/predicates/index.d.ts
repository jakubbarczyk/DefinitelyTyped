export { default as hasProp } from './hasProp';

export { default as hasPropPath } from './hasPropPath';

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

export { default as isArray } from './isArray';

// TODO: requires Bifunctor
// export function isBifunctor(val: unknown): val is Bifunctor;

export { default as isBoolean } from './isBoolean';

// TODO: requires Category
// export function isCategory(val: unknown): val is Category;

// TODO: requires Chain
// export function isChain(val: unknown): val is Chain;

// TODO: requires Contravariant
// export function isContravariant(val: unknown): val is Contravariant;

export { default as isDate } from './isDate';

// TODO: requires !undefined
// export function isDefined(val: unknown): val is Defined;

// TODO: requires Empty
// export function isEmpty(val: unknown): val is Empty;

// TODO: requires Extend
// export function isExtend(val: unknown): val is Extend;

export { default as isFalse } from './isFalse';

export { default as isFalsy } from './isFalsy';

// TODO: requires Foldable
// export function isFoldable(val: unknown): val is Foldable;

export { default as isFunction } from './isFunction';

// TODO: requires Functor
// export function isFunctor(val: unknown): val is Functor;

export { default as isInteger } from './isInteger';

export { default as isIterable } from './isIterable';

export { default as isMap } from './isMap';

// TODO: requires Monad
// export function isMonad(val: unknown): val is Monad;

// TODO: requires Monoid
// export function isMonoid(val: unknown): val is Monoid;

export { default as isNil } from './isNil'
export { default as isNumber } from './isNumber'
export { default as isObject } from './isObject'

// TODO: requires Plus
// export function isPlus(val: unknown): val is Plus;

// TODO: requires Profunctor
// export function isProfunctor(val: unknown): val is Profunctor;

export { default as isPromise } from './isPromise';
export { default as isSame } from './isSame';
export { default as isSameType } from './isSameType';

// TODO: requires Semigroup
// export function isSemigroup(val: unknown): val is Semigroup;

// TODO: requires Semigroupoid
// export function isSemigroupoid(val: unknown): val is Semigroupoid;

// TODO: requires Setoid
// export function isSetoid(val: unknown): val is Setoid;

export { default as isString } from './isString';
export { default as isSymbol } from './isSymbol';

// TODO: requires Traversable
// export function isTraversable(val: unknown): val is Traversable;

export { default as isTrue } from './isTrue';
export { default as isTruthy } from './isTruthy';
export { default as pathEq } from './pathEq';
export { default as propEq } from './propEq';

// TODO requires Pred
// export function pathSatisfies(path: ReadonlyArray<string | number>, pred: (val: any) => boolean | Pred, obj: object): boolean;
// export function pathSatisfies(path: ReadonlyArray<string | number>, pred: (val: any) => boolean | Pred): (obj: object) => boolean;
// export function pathSatisfies(path: ReadonlyArray<string | number>): (pred: (val: any) => boolean | Pred) => (obj: object) => boolean;

// TODO requires Pred
// export function propSatisfies(prop: string | number, pred: (val: any) => boolean | Pred, obj: object): boolean;
// export function propSatisfies(prop: string | number, pred: (val: any) => boolean | Pred): (obj: object) => boolean;
// export function propSatisfies(prop: string | number): (pred: (val: any) => boolean | Pred) => (obj: object) => boolean;
