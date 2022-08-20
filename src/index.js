import {
  resolvers,
  fetchers,
  constants,
} from "./api";
import {
  User,
  Activity,
  AverageSessions,
  Performance,
} from './models';
import { Store } from "./store";

const USER_ID = 18;

let resourceResolver;
let resourceFetcher;

if (import.meta.env.MODE === 'development') {
  resourceResolver = new resolvers.FixtureResolver(constants.BASE_MOCK_PATH);
  resourceFetcher = new fetchers.FixtureFetcher();
} else {
  resourceResolver = new resolvers.EndpointResolver(constants.BASE_URL);
  resourceFetcher = new fetchers.EndpointFetcher();
}

const userData = await resourceFetcher.get(resourceResolver.user(USER_ID));
const activityData = await resourceFetcher.get(resourceResolver.activity(USER_ID));
const averageSessionsData = await resourceFetcher.get(resourceResolver.averageSessions(USER_ID));
const performanceData = await resourceFetcher.get(resourceResolver.performance(USER_ID));

const user = User.fromApiData(userData);
const activity = Activity.fromApiData(activityData);
const averageSessions = AverageSessions.fromApiData(averageSessionsData);
const performance = Performance.fromApiData(performanceData);

console.dir(user);
console.dir(activity);
console.dir(averageSessions);
console.dir(performance);
