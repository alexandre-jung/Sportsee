import { Resolver } from "./resolver.interface";

export class FixtureResolver implements Resolver {
  basePath: string;

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
