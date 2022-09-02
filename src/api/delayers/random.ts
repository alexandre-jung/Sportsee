/* eslint-disable @typescript-eslint/no-explicit-any */
import { Delayer } from './delayer.interface';

export class RandomDelayer implements Delayer {
  minMs: number;
  maxMs: number;
  intervalMs: number;

  constructor(minMs: number, maxMs: number) {
    this.minMs = Math.max(0, minMs);
    this.maxMs = Math.max(0, maxMs);
    this.intervalMs = this.maxMs - this.minMs;
  }

  delay(resolve: (data: any) => void, data: any) {
    const randomDelay =
      this.minMs + Math.floor(Math.random() * (this.intervalMs + 1));
    setTimeout(() => resolve(data), randomDelay);
  }
}
