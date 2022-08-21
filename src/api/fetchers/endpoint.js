import { BaseFetcher } from "./base";

export class EndpointFetcher extends BaseFetcher {
  get(endpoint) {
    const fetchPromise = fetch(endpoint);
    const resolver = (resolve, reject) => {
      fetchPromise
        .then((response) => {
          if (response.ok) {
            this.delayer.delay(resolve, response.json());
          } else {
            this.delayer.delay(reject, {
              status: response.status,
              message: response.statusText,
            });
          }
        })
        .catch((error) => {
          this.delayer.delay(reject, error);
        });
    };
    return new Promise(resolver);
  }
}
