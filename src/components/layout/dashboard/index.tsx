import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export type DashboardLayoutProps = {
  header: JSX.Element;
  activity: JSX.Element;
  averageSessions: JSX.Element;
  performance: JSX.Element;
  score: JSX.Element;
  nutritionalInformations: JSX.Element;
};

/**
 * The dashboard to display user's most important information.
 *
 * @type {React.FC<DashboardLayoutProps>}
 * @param {DashboardLayoutProps} props
 * @return {JSX.Element} JSX element
 *
 * @example
 * <Dashboard
 *   Layout={DashboardLayout}
 *   // ...
 * />
 */
export function DashboardLayout ({
  header,
  activity,
  averageSessions,
  performance,
  score,
  nutritionalInformations,
}: DashboardLayoutProps) {
  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.header}>{header}</div>
      <div className={styles.activity}>{activity}</div>
      <div className={styles.averageSessions}>{averageSessions}</div>
      <div className={styles.performance}>{performance}</div>
      <div className={styles.score}>{score}</div>
      <div className={styles.nutritionalInformations}>
        {nutritionalInformations}
      </div>
    </div>
  );
}

DashboardLayout.propTypes = {
  header: PropTypes.element.isRequired,
  activity: PropTypes.element.isRequired,
  averageSessions: PropTypes.element.isRequired,
  performance: PropTypes.element.isRequired,
  score: PropTypes.element.isRequired,
  nutritionalInformations: PropTypes.element.isRequired,
};
