import { FixtureResolver } from '../../api/resolvers';
import { FixtureFetcher } from '../../api/fetchers';
import { BaseInteractor } from '..';
import { constants } from '../../api';
import { Delayer } from '../../api/delayers';

/**
 * An interactor which interacts will the mock data,\
 * with an optional response delayer.
 */
export class MockInteractor extends BaseInteractor {
  /**
   * Constructor.
   *
   * @param { Delayer } responseDelayer
   */
  constructor(responseDelayer?: Delayer) {
    super();
    const resolver = new FixtureResolver(constants.BASE_MOCK_PATH);
    const fetcher = new FixtureFetcher();
    this.setResolver(resolver);
    this.setFetcher(fetcher);
    if (responseDelayer) {
      this.setResponseDelayer(responseDelayer);
    }
  }
}
