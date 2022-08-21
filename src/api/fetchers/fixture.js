import { BaseFetcher } from "./base";

export class FixtureFetcher extends BaseFetcher {
  get(fixturePath) {
    const importPromise = import(
      /* @vite-ignore */
      fixturePath
    );
    const resolver = (resolve) => {
      importPromise.then((data) => {
        const fixtureContent = JSON.stringify(data.default);
        const response = new Response(fixtureContent);
        this.delayer.delay(resolve, response.json());
      });
    };
    return new Promise(resolver);
  }
}
