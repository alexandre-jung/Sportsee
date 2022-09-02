import { Session, ApiResponseAverageSessions } from '../api/types';
import { DAYS } from '../constants';

function getSessionsLengthesByDayIndex(sessions: Session[]) {
  return Array.from(sessions.values()).map((day) => day.sessionLength);
}

export class AverageSessions {
  monday!: number;
  tuesday!: number;
  wednesday!: number;
  thursday!: number;
  friday!: number;
  saturday!: number;
  sunday!: number;

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
