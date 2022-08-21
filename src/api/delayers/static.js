export class StaticDelayer {
  constructor(delayMs = 0) {
    this.delayMs = Math.max(0, delayMs);
  }

  delay(resolve, data) {
    setTimeout(() => resolve(data), this.delayMs);
  }
}
