import { useQuery } from '../useQuery';
import interactor from '../init';
import { User } from '../../models';

/**
 * Fetches the user data.
 * 
 * @param { number } userId
 * @return { QueryState } the query state
 */
export function useUser(userId: number) {
  return useQuery<User>(() => interactor.user(userId));
}
