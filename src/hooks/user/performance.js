import { useQuery } from "../useQuery";
import interactor from "../init";

export function usePerformance(userId) {
  return useQuery(() => interactor.performance(userId));
}
