/** isSameType :: Container m => (m, m) -> Boolean */
declare function isSameType(val1: unknown, val2: unknown): boolean;
declare function isSameType(val1: unknown): (val2: unknown) => boolean;

export default isSameType;
