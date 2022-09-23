import { Delayer } from './delayer.interface';

/**
 * A class for delaying function calls by a set time.
 */
export class StaticDelayer implements Delayer {
  delayMs: number;

  /**
   * Constructor.
   *
   * @param { number } delayMs the delay, in milliseconds
   */
  constructor(delayMs = 0) {
    this.delayMs = Math.max(0, delayMs);
  }

  /**
   * Calls a function after a set delay, passing it custom data.
   *
   * @param { Function } resolve
   * @param data
   */
  delay<T>(resolve: (data: T) => void, data: T) {
    setTimeout(() => resolve(data), this.delayMs);
  }
}
