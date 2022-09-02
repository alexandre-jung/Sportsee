import { useQuery } from '../useQuery';
import interactor from '../init';

export function useAverageSessions(userId: number) {
  return useQuery(() => interactor.averageSessions(userId));
}
