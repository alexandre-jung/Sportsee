import { useQuery } from '../useQuery';
import interactor from '../init';

export function usePerformance(userId: number) {
  return useQuery(() => interactor.performance(userId));
}
