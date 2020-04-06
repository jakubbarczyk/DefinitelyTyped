import Async from './Async';
import race from './Async/race';
import Either from './Either';

const noop = () => {};

const asyncValue1: Async = Async(() => 1);
const asyncValue2: Async = Async(() => 2);
const raceValue: Async = race(asyncValue1, asyncValue2);

raceValue.fork(noop, noop);

const eitherLeft: Either = Either.Left(1);
const eitherRight: Either = Either.Right(2);

eitherLeft.equals(eitherRight);
