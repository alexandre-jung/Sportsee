import { MAX_LAST_SESSIONS } from '../constants';

export class Activity {
  static fromApiData(apiRawData) {
    const { sessions: lastSessionsChronological } = apiRawData.data;
    const lastSessionsAntiChronological = lastSessionsChronological
      .reverse()
      .slice(0, MAX_LAST_SESSIONS)
      .map(({ day, kilogram, calories }) => {
        return {
          day: new Date(day),
          kilogram,
          calories,
        };
      });
    return lastSessionsAntiChronological.reverse();
  }
}
