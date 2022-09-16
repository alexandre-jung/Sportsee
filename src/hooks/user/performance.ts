import { useQuery } from '../useQuery';
import interactor from '../init';
import { Performance } from '../../models';

export function usePerformance(userId: number) {
  return useQuery<Performance>(() => interactor.performance(userId));
}
