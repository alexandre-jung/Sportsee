import { useState, useEffect, useRef } from "react";

const initialQueryState = {
  isLoading: false,
  data: null,
};

export function useQuery(queryFunction) {
  const [queryState, setQueryState] = useState(initialQueryState);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const queryPromise = queryFunction();
    setQueryState((state) => ({ ...state, isLoading: true }));
    queryPromise
      .then((data) => {
        if (isMounted.current) {
          setQueryState({ data, isLoading: false });
        }
      })
      .catch((error) => {
        setQueryState((previous) => ({
          previous,
          isLoading: false,
          isError: true,
          error,
        }));
      });
  }, []);

  return queryState;
}
