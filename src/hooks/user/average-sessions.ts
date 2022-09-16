import { useQuery } from '../useQuery';
import interactor from '../init';
import { AverageSessions } from '../../models';

/**
 * Fetches the average sessions data.
 * 
 * @param { number } userId
 * @return { QueryState } the query state
 */
export function useAverageSessions(userId: number) {
  return useQuery<AverageSessions>(() => interactor.averageSessions(userId));
}
