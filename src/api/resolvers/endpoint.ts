import { Resolver } from './resolver.interface';

/**
 * A class that provides endpoint URLs.
 */
export class EndpointResolver implements Resolver {
  private readonly baseURL: string;

  /**
   * Constructor.
   *
   * @param { string } baseURL the base URL for all API requests
   */
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  user = (userId: number) => `${this.baseURL}/user/${userId}`;
  activity = (userId: number) => `${this.baseURL}/user/${userId}/activity`;
  averageSessions = (userId: number) =>
    `${this.baseURL}/user/${userId}/average-sessions`;
  performance = (userId: number) =>
    `${this.baseURL}/user/${userId}/performance`;
}
