import { ReactNode } from 'react';
import styles from './styles.module.scss';

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
    return <div className={styles.placeholder}></div>;
  }

  if (isError) {
    return <h2>{error}</h2>;
  }

  return children;
}
