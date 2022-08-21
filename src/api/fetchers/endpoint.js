import { BaseFetcher } from "./base";

export class EndpointFetcher extends BaseFetcher {
  get(endpoint) {
    const response = fetch(endpoint);
    const resolver = (resolve) => {
      response.then((response) => {
        this.delayer.delay(resolve, response.json());
      });
    };
    return new Promise(resolver);
  }
}
