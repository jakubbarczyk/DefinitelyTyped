/** 
 * The Kestrel
 * constant :: a -> () -> a
 */
declare function constant<T>(val: T): () => T;

export default constant;
