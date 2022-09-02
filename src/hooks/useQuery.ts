import { useState, useEffect, useRef } from 'react';

export type QueryState = {
  isLoading: boolean;
  data?: any;
  isError?: boolean;
  error?: any;
};

const initialQueryState = {
  isLoading: true,
  data: null,
};

export function useQuery(queryFunction: () => Promise<any>) {
  const [queryState, setQueryState] = useState<QueryState>(initialQueryState);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const queryPromise = queryFunction();
    setQueryState((state: any) => ({ ...state, isLoading: true }));
    queryPromise
      .then((data) => {
        if (isMounted.current) {
          setQueryState({ data, isLoading: false });
        }
      })
      .catch((error: any) => {
        if (isMounted.current) {
          setQueryState((previous: any) => ({
            ...previous,
            isLoading: false,
            isError: true,
            error,
          }));
        }
      });
  }, []);

  return queryState;
}
