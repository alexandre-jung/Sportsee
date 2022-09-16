import { Session, ApiResponseAverageSessions } from '../api/types';
import { DAYS } from '../constants';

/**
 * Converts the sessions data from the API to an array of session lengthes,
 * indexed by day index (where monday is at index 0).
 *
 * @param { { day: number, sessionLength: number }[] } sessions
 * @returns { number[] } an array of lengthes
 */
function getSessionsLengthesByDayIndex(sessions: Session[]) {
  return Array.from(sessions.values()).map((day) => day.sessionLength);
}

/**
 * A model that represents the average sessions data.
 */
export class AverageSessions {
  monday!: number;
  tuesday!: number;
  wednesday!: number;
  thursday!: number;
  friday!: number;
  saturday!: number;
  sunday!: number;

  /**
   * Builds an AverageSessions model from the data returned by the API.
   *
   * @param { AverageSessions } apiRawData the raw api data
   * @returns { AverageSessions } Performance
   */
  static fromApiData(apiRawData: ApiResponseAverageSessions) {
    const { sessions } = apiRawData.data;
    const averageSessions = new AverageSessions();
    const sessionsLengthes = getSessionsLengthesByDayIndex(sessions);
    averageSessions.monday = sessionsLengthes[DAYS.MONDAY];
    averageSessions.tuesday = sessionsLengthes[DAYS.TUESDAY];
    averageSessions.wednesday = sessionsLengthes[DAYS.WEDNESDAY];
    averageSessions.thursday = sessionsLengthes[DAYS.THURSDAY];
    averageSessions.friday = sessionsLengthes[DAYS.FRIDAY];
    averageSessions.saturday = sessionsLengthes[DAYS.SATURDAY];
    averageSessions.sunday = sessionsLengthes[DAYS.SUNDAY];
    return averageSessions;
  }
}
