import { useQuery } from "../useQuery";
import interactor from "../init";

export function useActivity(userId) {
  return useQuery(() => interactor.activity(userId));
}
