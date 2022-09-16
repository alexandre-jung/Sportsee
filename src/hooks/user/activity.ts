import { useQuery } from '../useQuery';
import interactor from '../init';
import { Activity } from '../../models';

/**
 * Fetches the user data.
 * 
 * @return { QueryState } the query state
 */
export function useActivity(userId: number) {
  return useQuery<Activity[]>(() => interactor.activity(userId));
}
