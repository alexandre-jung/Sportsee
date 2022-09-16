import { useQuery } from '../useQuery';
import interactor from '../init';
import { Performance } from '../../models';

/**
 * Fetches the performance data.
 * 
 * @param { number } userId
 * @return { QueryState } the query state
 */
export function usePerformance(userId: number) {
  return useQuery<Performance>(() => interactor.performance(userId));
}
