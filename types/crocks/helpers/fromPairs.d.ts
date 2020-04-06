import List from '../List';
import Pair from '../Pair';

/**
 * fromPairs :: Foldable f => f (Pair String a) -> Object
 */
declare function fromPairs(val: Array<Pair> | List): object;

export default fromPairs;
