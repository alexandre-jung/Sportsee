import { BaseFetcher } from "./base";

export class FixtureFetcher extends BaseFetcher {
  get(fixturePath) {
    const importPromise = import(
      /* @vite-ignore */
      fixturePath
    );
    const resolver = (resolve, reject) => {
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
