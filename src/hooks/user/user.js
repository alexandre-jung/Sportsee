import { useQuery } from "../useQuery";
import interactor from "../init";

export function useUser(userId) {
  return useQuery(() => interactor.user(userId));
}
