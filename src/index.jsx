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
    <>
      <Header firstName={userQuery.data.firstName} />
      <Activity activity={activityQuery.data} />
      <AverageSessions averageSessions={averageSessionsQuery.data} />
      <Performance performance={performanceQuery.data} />
      <Score scorePercentage={userQuery.data.scorePercentage} />
      <NutritionalInformations {...userQuery.data.nutritionalInformations} />
    </>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
