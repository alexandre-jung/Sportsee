import { QueryState } from '../../hooks';
import styles from './styles.module.scss';

export type QueryPlaceholderProps = {
  children: (data: unknown) => React.ReactNode;
  query: QueryState<unknown>;
};

/**
 * A component that delays the display of its children until a query resolves.
 */
export function QueryPlaceholder({
  query: { data, isLoading, isError, error },
  children,
}: QueryPlaceholderProps): React.ReactElement {
  if (isLoading) {
    return <div className={styles.placeholder}></div>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return <>{children(data)}</>;
}
