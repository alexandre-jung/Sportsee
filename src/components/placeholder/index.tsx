import { ReactNode } from 'react';

type QueryPlaceholderProps = {
  children: ReactNode;
  isLoading: boolean;
  isError: boolean;
  error: any;
};

export function QueryPlaceholder({
  children,
  isLoading,
  isError,
  error,
}: QueryPlaceholderProps) {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error}</h2>;
  }

  return children;
}
