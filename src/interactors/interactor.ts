/* eslint-disable @typescript-eslint/no-explicit-any */
import { Delayer } from '../api/delayers';
import { BaseFetcher } from '../api/fetchers/base';
import { Resolver } from '../api/resolvers';
import { Activity, AverageSessions, Performance, User } from '../models';

/**
 * Base class for API interactors.
 */
export abstract class BaseInteractor {
  private resolver!: Resolver;
  private fetcher!: BaseFetcher;
  private delayer!: Delayer;

  /**
   * Sets a Resolver supplying resource URIs.
   *
   * @param { Resolver } resolver
   */
  setResolver(resolver: Resolver) {
    this.resolver = resolver;
  }

  /**
   * Sets a Fetcher to make queries.
   *
   * @param { BaseFetcher } fetcher
   */
  setFetcher(fetcher: BaseFetcher) {
    this.fetcher = fetcher;
  }

  /**
   * Sets a Resolver supplying resources URIs
   *
   * @param { Delayer } responseDelayer
   */
  setResponseDelayer(responseDelayer: Delayer) {
    this.delayer = responseDelayer;
  }

  /**
   * Fetches data as a model given an uri.
   *
   * @param { string } uri
   * @param Model the model to produce once the request is resolved
   * @returns
   */
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
    return Model.fromApiData(data);
  }

  /**
   * Fetches a User model.
   *
   * @param { number } userId
   * @returns User
   */
  async user(userId: number) {
    const uri = this.resolver.user(userId);
    return this.fetch(uri, User);
  }

  /**
   * Fetches an Activity model.
   *
   * @param { number } userId
   * @returns Activity
   */
  async activity(userId: number) {
    const uri = this.resolver.activity(userId);
    return this.fetch(uri, Activity);
  }

  /**
   * Fetches an AverageSessions model.
   *
   * @param { number } userId
   * @returns AverageSessions
   */
  async averageSessions(userId: number) {
    const uri = this.resolver.averageSessions(userId);
    return this.fetch(uri, AverageSessions);
  }

  /**
   * Fetches a Performance model.
   *
   * @param { number } userId
   * @returns Performance
   */
  async performance(userId: number) {
    const uri = this.resolver.performance(userId);
    return this.fetch(uri, Performance);
  }
}
