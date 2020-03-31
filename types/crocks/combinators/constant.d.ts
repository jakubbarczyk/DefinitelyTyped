/** 
 * The Kestrel
 * constant :: a -> b -> a
 */
declare function constant<T>(val: T): () => T;

export default constant;
