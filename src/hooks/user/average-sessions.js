import { useQuery } from "../useQuery";
import interactor from "../init";

export function useAverageSessions(userId) {
  return useQuery(() => interactor.averageSessions(userId));
}
