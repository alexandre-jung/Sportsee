import { ApiResponseActivity } from '../api/types';
import { MAX_LAST_SESSIONS } from '../constants';

/**
 * A model that represents the activity data.
 */
export class Activity {
  // noinspection JSUnusedGlobalSymbols
  /**
   * Builds an Activity model from the data returned by the API.
   *
   * @param { Activity } apiRawData the raw api data
   * @returns { Activity } Activity
   */
  static fromApiData(apiRawData: ApiResponseActivity) {
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
