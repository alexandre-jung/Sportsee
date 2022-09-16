import { EndpointResolver } from '../../api/resolvers';
import { EndpointFetcher } from '../../api/fetchers';
import { BaseInteractor } from '..';
import { constants } from '../../api';
import { Delayer } from '../../api/delayers';

/**
 * An interactor which interacts will the real API,\
 * with an optional response delayer.
 */
export class ApiInteractor extends BaseInteractor {
  /**
   * Constructor.
   *
   * @param { Delayer } responseDelayer
   */
  constructor(responseDelayer?: Delayer) {
    super();
    const resolver = new EndpointResolver(constants.BASE_URL);
    const fetcher = new EndpointFetcher();
    this.setResolver(resolver);
    this.setFetcher(fetcher);
    if (responseDelayer) {
      this.setResponseDelayer(responseDelayer);
    }
  }
}
