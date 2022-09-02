// import { ReactElement } from 'react';
import styles from './styles.module.scss';

export type DashboardLayoutProps = {
  header: JSX.Element;
  activity: JSX.Element;
  averageSessions: JSX.Element;
  performance: JSX.Element;
  score: JSX.Element;
  nutritionalInformations: JSX.Element;
};

export function DashboardLayout({
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
