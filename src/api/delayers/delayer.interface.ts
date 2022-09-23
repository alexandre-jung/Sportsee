/**
 * Base class for delayers.
 */
export abstract class Delayer {
  abstract delay<T>(resolve: (data: T) => void, data: T): void;
}
