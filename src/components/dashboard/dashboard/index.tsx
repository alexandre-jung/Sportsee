import { FC } from 'react';
import {
  useActivity,
  useAverageSessions,
  usePerformance,
  useUser,
} from '../../../hooks';
import * as models from '../../../models';
import { DashboardLayoutProps } from '../../layout';
import { QueryPlaceholderProps } from '../../placeholder';
import { Activity, ActivityProps } from '../activity';
import { AverageSessionsProps } from '../average-sessions';
import { HeaderProps } from '../header';
import { NutritionalInformationsProps } from '../nutritional-informations';
import { PerformanceProps } from '../performance';
import { ScoreProps } from '../score';

type DashboardProps = {
  userId: number;
  Layout: FC<DashboardLayoutProps>;
  Placeholder: FC<QueryPlaceholderProps>;
  Header: FC<HeaderProps>;
  Activity: FC<ActivityProps>;
  AverageSessions: FC<AverageSessionsProps>;
  Performance: FC<PerformanceProps>;
  Score: FC<ScoreProps>;
  NutritionalInformations: FC<NutritionalInformationsProps>;
};

/**
 * The dashboard main component to display
 * all the graphs and other usefull informations.
 */
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
        <Placeholder query={userQuery}>
          {(user) => <Header firstName={(user as models.User).firstName} />}
        </Placeholder>
      }
      activity={
        <Placeholder query={activityQuery}>
          {(activity) => <Activity activity={activity as Activity[]} />}
        </Placeholder>
      }
      averageSessions={
        <Placeholder query={averageSessionsQuery}>
          {(averageSessions) => (
            <AverageSessions
              averageSessions={averageSessions as models.AverageSessions}
            />
          )}
        </Placeholder>
      }
      performance={
        <Placeholder query={performanceQuery}>
          {(performance) => (
            <Performance performance={performance as models.Performance} />
          )}
        </Placeholder>
      }
      score={
        <Placeholder query={userQuery}>
          {(user) => (
            <Score scorePercentage={(user as models.User).scorePercentage} />
          )}
        </Placeholder>
      }
      nutritionalInformations={
        <Placeholder query={userQuery}>
          {(user) => (
            <NutritionalInformations
              calorie={(user as models.User).calorieCount}
              protein={(user as models.User).proteinCount}
              carbohydrate={(user as models.User).carbohydrateCount}
              lipid={(user as models.User).lipidCount}
            />
          )}
        </Placeholder>
      }
    />
  );
}
