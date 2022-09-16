import { useQuery } from '../useQuery';
import interactor from '../init';
import { User } from '../../models';

export function useUser(userId: number) {
  return useQuery<User>(() => interactor.user(userId));
}
