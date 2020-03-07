import { Async } from "./src/Async";
import { Either, Left } from "./src/Either";

const asyncValue: Async = Async(() => null);
const racingValue: Async = race(asyncValue);

const eitherRight: Either = Either.Right(17);
const leftRight: Left = Either.Right(17);
