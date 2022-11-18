/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';

export type QueryState<T> = {
  isLoading: boolean;
  data?: T;
  isError: boolean;
  error?: any;
};

const initialQueryState = {
  isLoading: true,
  isError: false,
};

/**
 * Fetches data, using a user provided query function.
 * Returns an object representing the query state.
 * Update the component state when the query state changes.
 *
 * @param { function } queryFunction - a function returning a Promise
 */
export function useQuery<T> (queryFunction: () => Promise<any>) {
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
    setQueryState((state: any) => ({
      ...state,
      isLoading: true,
    }));
    queryPromise
      .then((data) => {
        if (isMounted.current) {
          setQueryState({
            data,
            isLoading: false,
            isError: false,
          });
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
