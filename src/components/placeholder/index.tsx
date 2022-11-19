import PropTypes from 'prop-types';
import { QueryState } from '../../hooks';
import styles from './styles.module.scss';

export type QueryPlaceholderProps = {
  children: (data: unknown) => React.ReactNode;
  query: QueryState<unknown>;
};

/**
 * A component that delays the display of its children until a query resolves.
 *
 * @type {React.FC<QueryPlaceholderProps>}
 * @param {QueryPlaceholderProps} props
 * @return {JSX.Element} JSX element
 *
 * @example
 * <Placeholder query={userQuery}>
 *   {(user) => <Header firstName={(user as models.User).firstName} />}
 * </Placeholder>
 */
export function QueryPlaceholder ({
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

QueryPlaceholder.propTypes = {
  children: PropTypes.func.isRequired,
  query: PropTypes.exact({
    data: PropTypes.any,
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    error: PropTypes.any,
  }).isRequired,
};
