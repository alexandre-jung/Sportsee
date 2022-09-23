import { Delayer, StaticDelayer } from '../delayers';

/**
 * Base class for data fetchers.
 */
export abstract class BaseFetcher {
  private _delayer: Delayer;

  /**
   * Constructor.
   *
   * @param { Delayer } delayer a Delayer to slow down responses.
   */
  constructor(delayer: Delayer = new StaticDelayer()) {
    this._delayer = delayer;
  }

  /**
   * Change the response Delayer.
   *
   * @param { Delayer } delayer
   */
  setDelayer(delayer: Delayer) {
    this._delayer = delayer;
  }

  /**
   * Returns the current response Delayer.
   */
  get delayer() {
    return this._delayer;
  }

  /**
   * Fetches a resource.
   *
   * @param url the resource to fetch
   */
  abstract get<T>(url: string): Promise<T>;
}
