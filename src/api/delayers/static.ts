import { Delayer } from "./delayer.interface";

export class StaticDelayer implements Delayer {
  delayMs: number;

  constructor(delayMs = 0) {
    this.delayMs = Math.max(0, delayMs);
  }

  delay(resolve: (data: any) => void, data: any) {
    setTimeout(() => resolve(data), this.delayMs);
  }
}
