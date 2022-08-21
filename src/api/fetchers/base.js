import { StaticDelayer } from "../delayers";

export class BaseFetcher {
  constructor(delayer = new StaticDelayer()) {
    this._delayer = delayer;
  }

  setDelayer(delayer) {
    this._delayer = delayer;
  }

  get delayer() {
    return this._delayer;
  }
}
