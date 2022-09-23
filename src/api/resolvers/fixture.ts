import { Resolver } from "./resolver.interface";

/**
 * A class that provides mock data paths.
 */
export class FixtureResolver implements Resolver {
  basePath: string;

  /**
   * Constructor.
   *
   * @param { string } basePath the base path for all mock requests
   */
  constructor(basePath: string) {
    this.basePath = basePath;
  }

  getFixturePath(fixtureName: string) {
    return `${this.basePath}/${fixtureName}.json`;
  }

  user = () => this.getFixturePath('user');
  activity = () => this.getFixturePath('activity');
  averageSessions = () => this.getFixturePath('average-sessions');
  performance = () => this.getFixturePath('performance');
}
