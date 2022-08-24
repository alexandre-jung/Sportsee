import styles from "./styles.module.scss";

export function DashboardLayout({
  header,
  activity,
  averageSessions,
  performance,
  score,
  nutritionalInformations,
}) {
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
