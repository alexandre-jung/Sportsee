import { createRoot } from "react-dom/client";
import {
  useActivity,
  useAverageSessions,
  usePerformance,
  useUser,
} from "./hooks";
import "./assets/main.scss";
import {
  Header,
  Activity,
  AverageSessions,
  Performance,
  Score,
  NutritionalInformations,
} from "./components/dashboard";
import { DashboardLayout } from "./components/layout";

const USER_ID = 18;

function App() {
  const userQuery = useUser(USER_ID);
  const activityQuery = useActivity(USER_ID);
  const averageSessionsQuery = useAverageSessions(USER_ID);
  const performanceQuery = usePerformance(USER_ID);

  return userQuery.isLoading ? (
    <h1>Loading...</h1>
  ) : userQuery.isError ? (
    <p>Ooops... {error.message}</p>
  ) : (
    <DashboardLayout
      header={<Header firstName={userQuery.data.firstName} />}
      activity={<Activity activity={activityQuery.data} />}
      averageSessions={
        <AverageSessions averageSessions={averageSessionsQuery.data} />
      }
      performance={<Performance performance={performanceQuery.data} />}
      score={<Score scorePercentage={userQuery.data.scorePercentage} />}
      nutritionalInformations={
        <NutritionalInformations {...userQuery.data.nutritionalInformations} />
      }
    />
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
