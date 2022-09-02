import { useQuery } from '../useQuery';
import interactor from '../init';

export function useActivity(userId: number) {
  return useQuery(() => interactor.activity(userId));
}
