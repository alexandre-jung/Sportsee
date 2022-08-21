export class RandomDelayer {
  constructor(minMs, maxMs) {
    this.minMs = Math.max(0, minMs);
    this.maxMs = Math.max(0, maxMs);
    this.intervalMs = this.maxMs - this.minMs;
  }

  delay(resolve, data) {
    const randomDelay =
      this.minMs + Math.floor(Math.random() * (this.intervalMs + 1));
    setTimeout(() => resolve(data), randomDelay);
  }
}
