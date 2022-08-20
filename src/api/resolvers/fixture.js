export class FixtureResolver {
  constructor(basePath) {
    this.basePath = basePath;
  }

  getFixturePath(fixtureName) {
    return `${this.basePath}/${fixtureName}.json`;
  }

  user = () => this.getFixturePath('user');
  activity = () => this.getFixturePath('activity');
  averageSessions = () => this.getFixturePath('average-sessions');
  performance = () => this.getFixturePath('performance');
}
