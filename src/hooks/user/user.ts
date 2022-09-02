import { useQuery } from '../useQuery';
import interactor from '../init';

export function useUser(userId: number) {
  return useQuery(() => interactor.user(userId));
}
