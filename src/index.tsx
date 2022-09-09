import { createRoot } from 'react-dom/client';
import './assets/main.scss';
import { AppHeader } from './components/layout';
import {
  Header,
  Activity,
  AverageSessions,
  Performance,
  Score,
  NutritionalInformations,
  Dashboard,
} from './components/dashboard';
import { DashboardLayout } from './components/layout';
import { QueryPlaceholder } from './components/placeholder';

const USER_ID = 18;

function App() {
  return (
    <>
      <AppHeader />
      <div style={{ padding: '30px' }}>
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
    </>
  );
}

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
