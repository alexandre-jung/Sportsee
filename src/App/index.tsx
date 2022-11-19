import { AppHeader, Sidebar } from '../components';
import {
  Header,
  Activity,
  AverageSessions,
  Performance,
  Score,
  NutritionalInformations,
  Dashboard,
} from '../components';
import { DashboardLayout } from '../components';
import { QueryPlaceholder } from '../components';
import styles from './styles.module.scss';

const USER_ID = 12;

/**
 * The application main component.
 *
 * @returns {JSX.Element} JSX element
 */
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
