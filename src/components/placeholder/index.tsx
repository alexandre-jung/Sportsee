import { QueryState } from '../../hooks';
import styles from './styles.module.scss';

export type QueryPlaceholderProps = {
  children: (data: unknown) => React.ReactNode;
  query: QueryState<unknown>;
};

export function QueryPlaceholder({
  query: { data, isLoading, isError, error },
  children,
}: QueryPlaceholderProps): React.ReactElement {
  if (isLoading) {
    return <div className={styles.placeholder}></div>;
  }

  if (isError) {
    return <h2>{error}</h2>;
  }

  return <>{children(data)}</>;
}
