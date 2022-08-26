import {
  useActivity,
  useAverageSessions,
  usePerformance,
  useUser,
} from "../../../hooks";

export function Dashboard({
  userId,
  Layout,
  Placeholder,
  Header,
  Activity,
  AverageSessions,
  Performance,
  Score,
  NutritionalInformations,
}) {
  const userQuery = useUser(userId);
  const activityQuery = useActivity(userId);
  const averageSessionsQuery = useAverageSessions(userId);
  const performanceQuery = usePerformance(userId);

  return (
    <Layout
      header={
        <Placeholder {...userQuery}>
          <Header firstName={userQuery.data?.firstName} />
        </Placeholder>
      }
      activity={
        <Placeholder {...activityQuery}>
          <Activity activity={activityQuery.data} />
        </Placeholder>
      }
      averageSessions={
        <Placeholder {...averageSessionsQuery}>
          <AverageSessions averageSessions={averageSessionsQuery.data} />
        </Placeholder>
      }
      performance={
        <Placeholder {...performanceQuery}>
          <Performance performance={performanceQuery.data} />
        </Placeholder>
      }
      score={
        <Placeholder {...userQuery}>
          <Score scorePercentage={userQuery.data?.scorePercentage} />
        </Placeholder>
      }
      nutritionalInformations={
        <Placeholder {...userQuery}>
          <NutritionalInformations
            {...userQuery.data?.nutritionalInformations}
          />
        </Placeholder>
      }
    />
  );
}
