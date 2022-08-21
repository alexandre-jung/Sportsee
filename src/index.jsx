import { createRoot } from "react-dom/client";
import {
  useActivity,
  useAverageSessions,
  usePerformance,
  useUser,
} from "./hooks";
import "./assets/main.scss";

const USER_ID = 18;

function App() {
  const { data, isLoading, isError, error } = useUser(USER_ID);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : isError ? (
    <p>Ooops... {error.message}</p>
  ) : (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
