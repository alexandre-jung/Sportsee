/* eslint-disable @typescript-eslint/no-explicit-any */
import { Delayer } from '../api/delayers';
import { BaseFetcher } from '../api/fetchers/base';
import { Resolver } from '../api/resolvers';
import { User, Activity, AverageSessions, Performance } from '../models';

/**
 * Base class for API interactors.
 */
export abstract class BaseInteractor {
  private resolver!: Resolver;
  private fetcher!: BaseFetcher;
  private delayer!: Delayer;

  setResolver(resolver: Resolver) {
    this.resolver = resolver;
  }

  setFetcher(fetcher: BaseFetcher) {
    this.fetcher = fetcher;
  }

  setResponseDelayer(responseDelayer: Delayer) {
    this.delayer = responseDelayer;
  }

  async fetch(uri: string, Model: any) {
    if (this.delayer) {
      this.fetcher.setDelayer(this.delayer);
    }
    let data: any;
    try {
      data = await this.fetcher.get(uri);
    } catch (error: any) {
      return Promise.reject({ message: error.message });
    }
    const user = Model.fromApiData(data);
    return user;
  }

  async user(userId: number) {
    const uri = this.resolver.user(userId);
    return this.fetch(uri, User);
  }

  async activity(userId: number) {
    const uri = this.resolver.activity(userId);
    return this.fetch(uri, Activity);
  }

  async averageSessions(userId: number) {
    const uri = this.resolver.averageSessions(userId);
    return this.fetch(uri, AverageSessions);
  }

  async performance(userId: number) {
    const uri = this.resolver.performance(userId);
    return this.fetch(uri, Performance);
  }
}
