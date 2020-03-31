// SEE: https://github.com/Microsoft/TypeScript/issues/28682
/** isNil :: a -> Boolean */
declare function isNil(val: unknown): val is null|undefined|number;

export default isNil;
