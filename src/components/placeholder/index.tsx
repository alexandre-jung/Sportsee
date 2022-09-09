import { ReactNode } from 'react';
import styles from './styles.module.scss';

export type QueryPlaceholderProps = {
  children: ReactNode;
  isLoading: boolean;
  isError?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
};

export function QueryPlaceholder({
  children,
  isLoading,
  isError,
  error,
}: QueryPlaceholderProps): React.ReactElement {
  if (isLoading) {
    return <div className={styles.placeholder}></div>;
  }

  if (isError) {
    return <h2>{error}</h2>;
  }

  return <>{children}</>;
}
