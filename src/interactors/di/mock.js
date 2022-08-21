import { FixtureResolver } from "../../api/resolvers";
import { FixtureFetcher } from "../../api/fetchers";
import { BaseInteractor } from "..";
import { constants } from "../../api";

export class MockInteractor extends BaseInteractor {
  constructor(responseDelayer) {
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
