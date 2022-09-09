import { AppHeader, Sidebar } from '../components/layout';
import {
  Header,
  Activity,
  AverageSessions,
  Performance,
  Score,
  NutritionalInformations,
  Dashboard,
} from '../components/dashboard';
import { DashboardLayout } from '../components/layout';
import { QueryPlaceholder } from '../components/placeholder';
import styles from './styles.module.scss';

const USER_ID = 18;

export function App() {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <Dashboard
            userId={USER_ID}
            Layout={DashboardLayout}
            Placeholder={QueryPlaceholder}
            Header={Header}
            Activity={Activity}
            AverageSessions={AverageSessions}
            Performance={Performance}
            Score={Score}
            NutritionalInformations={NutritionalInformations}
          />
        </div>
      </div>
    </>
  );
}
