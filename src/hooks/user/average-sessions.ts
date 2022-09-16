import { useQuery } from '../useQuery';
import interactor from '../init';
import { AverageSessions } from '../../models';

export function useAverageSessions(userId: number) {
  return useQuery<AverageSessions>(() => interactor.averageSessions(userId));
}
