/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';

export type QueryState<T> = {
  isLoading: boolean;
  data: T | null;
  isError?: boolean;
  error?: any;
};

const initialQueryState = {
  isLoading: true,
  data: null,
};

export function useQuery<T>(queryFunction: () => Promise<any>) {
  const [queryState, setQueryState] =
    useState<QueryState<T>>(initialQueryState);

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
