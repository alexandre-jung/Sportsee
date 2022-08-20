import { DAYS } from "../constants";

function getSessionsLengthesByDayIndex(sessions) {
  return Array.from(sessions.values()).map(day => day.sessionLength);
}

export class AverageSessions {
  static fromApiData(apiRawData) {
    const { sessions } = apiRawData.data;
    const averageSessions = new AverageSessions();
    const sessionsLengthes = getSessionsLengthesByDayIndex(sessions);
    averageSessions.monday = sessionsLengthes[DAYS.MONDAY];
    averageSessions.thuesday = sessionsLengthes[DAYS.TUESDAY];
    averageSessions.wednesday = sessionsLengthes[DAYS.WEDNESDAY];
    averageSessions.thursday = sessionsLengthes[DAYS.THURSDAY];
    averageSessions.friday = sessionsLengthes[DAYS.FRIDAY];
    averageSessions.saturday = sessionsLengthes[DAYS.SATURDAY];
    averageSessions.sunday = sessionsLengthes[DAYS.SUNDAY];
    return averageSessions;
  }
}
