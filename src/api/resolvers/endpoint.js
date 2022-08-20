export class EndpointResolver {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  user = (userId) => `${this.baseURL}/user/${userId}`;
  activity = (userId) => `${this.baseURL}/user/${userId}/activity`;
  averageSessions = (userId) => `${this.baseURL}/user/${userId}/average-sessions`;
  performance = (userId) => `${this.baseURL}/user/${userId}/performance`;
};
