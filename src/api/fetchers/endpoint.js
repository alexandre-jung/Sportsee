export class EndpointFetcher {
  async get(endpoint) {
    const response = await fetch(endpoint);
    return await response.json();
  }
}
