import { EndpointResolver } from "../../api/resolvers";
import { EndpointFetcher } from "../../api/fetchers";
import { BaseInteractor } from "..";
import { constants } from "../../api";

export class ApiInteractor extends BaseInteractor {
  constructor(responseDelayer) {
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
