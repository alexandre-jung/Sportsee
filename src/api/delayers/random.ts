import { Delayer } from './delayer.interface';

/**
 * A class for delaying function calls by a random time.
 */
export class RandomDelayer implements Delayer {
  minMs: number;
  maxMs: number;
  intervalMs: number;

  /**
   * Constructor.
   *
   * @param { number } minMs the shorter delay, in milliseconds
   * @param { number } maxMs the higher delay, in milliseconds
   */
  constructor(minMs: number, maxMs: number) {
    this.minMs = Math.max(0, minMs);
    this.maxMs = Math.max(0, maxMs);
    this.intervalMs = this.maxMs - this.minMs;
  }

  /**
   * Calls a function after a random delay, passing it custom data.
   *
   * @param { Function } resolve
   * @param data
   */
  delay<T>(resolve: (data: T) => void, data: T) {
    const randomDelay =
      this.minMs + Math.floor(Math.random() * (this.intervalMs + 1));
    setTimeout(() => resolve(data), randomDelay);
  }
}
