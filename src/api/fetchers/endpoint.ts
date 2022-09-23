/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseFetcher } from './base';

/**
 * A fetcher to make GET requests to an API endpoint.
 */
export class EndpointFetcher extends BaseFetcher {
  /**
   * Send a GET request and returns the response wrapped in a Promise.
   *
   * @param { string } endpoint the endpoint URL.
   * @returns Promise<any>
   */
  get(endpoint: string) {
    const fetchPromise = fetch(endpoint);
    const resolver = (
      resolve: (data: any) => void,
      reject: (error: any) => void
    ) => {
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
