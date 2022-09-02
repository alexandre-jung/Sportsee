import { FixtureResolver } from '../../api/resolvers';
import { FixtureFetcher } from '../../api/fetchers';
import { BaseInteractor } from '..';
import { constants } from '../../api';
import { Delayer } from '../../api/delayers';

export class MockInteractor extends BaseInteractor {
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
