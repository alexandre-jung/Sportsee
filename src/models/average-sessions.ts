import { Session, ApiResponseAverageSessions } from '../api/types';
import { DAYS } from '../constants';

/**
 * Converts the sessions data from the API to an array of session lengths,
 * indexed by day index (where monday is at index 0).
 *
 * @param { { day: number, sessionLength: number }[] } sessions
 * @returns { number[] } an array of lengths
 */
function getSessionsLengthsByDayIndex(sessions: Session[]) {
  return Array.from(sessions.values()).map((day) => day.sessionLength);
}

/**
 * A model that represents the average session data.
 */
export class AverageSessions {
  monday!: number;
  tuesday!: number;
  wednesday!: number;
  thursday!: number;
  friday!: number;
  saturday!: number;
  sunday!: number;

  // noinspection JSUnusedGlobalSymbols
  /**
   * Builds an AverageSessions model from the data returned by the API.
   *
   * @param { AverageSessions } apiRawData the raw api data
   * @returns { AverageSessions } AverageSessions
   */
  static fromApiData(apiRawData: ApiResponseAverageSessions) {
    const { sessions } = apiRawData.data;
    const averageSessions = new AverageSessions();
    const sessionsLengths = getSessionsLengthsByDayIndex(sessions);
    averageSessions.monday = sessionsLengths[DAYS.MONDAY];
    averageSessions.tuesday = sessionsLengths[DAYS.TUESDAY];
    averageSessions.wednesday = sessionsLengths[DAYS.WEDNESDAY];
    averageSessions.thursday = sessionsLengths[DAYS.THURSDAY];
    averageSessions.friday = sessionsLengths[DAYS.FRIDAY];
    averageSessions.saturday = sessionsLengths[DAYS.SATURDAY];
    averageSessions.sunday = sessionsLengths[DAYS.SUNDAY];
    return averageSessions;
  }
}
