import { Resolver } from './resolver.interface';

export class EndpointResolver implements Resolver {
  baseURL: string;

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
