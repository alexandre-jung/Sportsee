export class FixtureFetcher {
  get(fixturePath) {
    const importPromise = import(
      /* @vite-ignore */
      fixturePath
    );
    const JSONResolver = resolve => {
      importPromise.then(data => {
        const fixtureContent = JSON.stringify(data.default)
        const response = new Response(fixtureContent);
        resolve(response.json());
      });
    };
    return new Promise(JSONResolver);
  }
}
