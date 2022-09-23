/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseFetcher } from './base';

/**
 * A fetcher to make GET requests to mock data.
 */
export class FixtureFetcher extends BaseFetcher {
  /**
   * Send a GET request and returns the response wrapped in a Promise.
   *
   * @param { string } fixturePath the mock data path.
   * @returns Promise<any>
   */
  get(fixturePath: string) {
    const importPromise = import(
      /* @vite-ignore */
      fixturePath
    );
    const resolver = (
      resolve: (data: any) => void,
      reject: (error: any) => void
    ) => {
      importPromise
        .then((data) => {
          const fixtureContent = JSON.stringify(data.default);
          const response = new Response(fixtureContent);
          this.delayer.delay(resolve, response.json());
        })
        .catch((error) => {
          this.delayer.delay(reject, error);
        });
    };
    return new Promise(resolver);
  }
}
