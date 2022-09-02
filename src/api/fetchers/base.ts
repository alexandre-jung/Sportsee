/* eslint-disable @typescript-eslint/no-explicit-any */
import { Delayer, StaticDelayer } from '../delayers';

export abstract class BaseFetcher {
  _delayer: Delayer;

  constructor(delayer = new StaticDelayer()) {
    this._delayer = delayer;
  }

  setDelayer(delayer: Delayer) {
    this._delayer = delayer;
  }

  get delayer() {
    return this._delayer;
  }

  abstract get(url: string): Promise<any>;
}
