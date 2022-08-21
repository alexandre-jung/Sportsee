import { User, Activity, AverageSessions, Performance } from "../models";

export class BaseInteractor {
  setResolver(resolver) {
    this.resolver = resolver;
  }

  setFetcher(fetcher) {
    this.fetcher = fetcher;
  }

  setResponseDelayer(responseDelayer) {
    this.delayer = responseDelayer;
  }

  async goForThatQuery(uri, Model) {
    if (this.delayer) {
      this.fetcher.setDelayer(this.delayer);
    }
    let data;
    try {
      data = await this.fetcher.get(uri);
    } catch (error) {
      return Promise.reject({ message: error.message });
    }
    const user = Model.fromApiData(data);
    return user;
  }

  async user(userId) {
    const uri = this.resolver.user(userId);
    return this.goForThatQuery(uri, User);
  }

  async activity(userId) {
    const uri = this.resolver.activity(userId);
    return this.goForThatQuery(uri, Activity);
  }

  async averageSessions(userId) {
    const uri = this.resolver.averageSessions(userId);
    return this.goForThatQuery(uri, AverageSessions);
  }

  async performance(userId) {
    const uri = this.resolver.performance(userId);
    return this.goForThatQuery(uri, Performance);
  }
}
