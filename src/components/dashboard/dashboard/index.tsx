import { FC } from 'react';
import {
  QueryState,
  useActivity,
  useAverageSessions,
  usePerformance,
  useUser,
} from '../../../hooks';
import { DashboardLayoutProps } from '../../layout';
import { ActivityProps } from '../activity';
import { AverageSessionsProps } from '../average-sessions';
import { HeaderProps } from '../header';
import { PerformanceProps } from '../performance';
import { ScoreProps } from '../score';

type DashboardProps = {
  userId: number;
  Layout: FC<DashboardLayoutProps>;
  Placeholder: FC<QueryState>;
  Header: FC<HeaderProps>;
  Activity: FC<ActivityProps>;
  AverageSessions: FC<AverageSessionsProps>;
  Performance: FC<PerformanceProps>;
  Score: FC<ScoreProps>;
  NutritionalInformations: FC;
};

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
}: DashboardProps) {
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
