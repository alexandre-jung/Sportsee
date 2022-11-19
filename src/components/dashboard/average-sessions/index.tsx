/* eslint-disable @typescript-eslint/no-explicit-any */
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { DAYS_MAP } from '../../../constants';
import { AverageSessionsCustomTooltip } from './custom-tooltip';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export type AverageSessions = {
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
};

type AdaptedAverageSessionsData = {
  key: string
  translatedDay: any
  abbreviatedDay: any
  length: number
}[]

/**
 * Transforms the data from an AverageSessions model to a format that can be displayed
 * by the average sessions graph component.
 *
 * @param {AverageSessions} averageSessions
 * @return {AdaptedAverageSessionsData}
 */
function adaptAverageSessionsData (averageSessions: AverageSessions): AdaptedAverageSessionsData {
  return Object.entries(averageSessions).map(([day, length]) => ({
    key: day,
    translatedDay: (DAYS_MAP as any)[day],
    abbreviatedDay: (DAYS_MAP as any)[day].slice(0, 1).toUpperCase(),
    length,
  }));
}

export type AverageSessionsProps = {
  averageSessions: AverageSessions;
};

/**
 * The average sessions graph component.
 *
 * @type {React.FC<AverageSessionsProps>}
 * @param {AverageSessionsProps} props
 * @return {JSX.Element} JSX element
 *
 * @example
 * <AverageSessions
 *   averageSessions={averageSessions as models.AverageSessions}
 * />
 */
export function AverageSessions ({ averageSessions }: AverageSessionsProps) {
  const data = adaptAverageSessionsData(averageSessions);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 50,
          right: 10,
          left: 10,
          bottom: 5,
        }}
        style={{ backgroundColor: 'red' }}
      >
        <XAxis
          dataKey="abbreviatedDay"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: '10px', fill: 'white' }}
          dy={10}
        />
        <Tooltip
          content={AverageSessionsCustomTooltip as any}
          wrapperStyle={{ outline: 'none' }}
        />
        <Line
          type="monotone"
          dataKey="length"
          stroke="white"
          strokeWidth={2}
          dot={false}
        />
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          className={styles.label}
          fill="white"
        >
          Durée moyenne des
        </text>
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          className={styles.label}
          fill="white"
        >
          sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}

AverageSessions.propTypes = {
  averageSessions: PropTypes.exact({
    monday: PropTypes.number.isRequired,
    tuesday: PropTypes.number.isRequired,
    wednesday: PropTypes.number.isRequired,
    thursday: PropTypes.number.isRequired,
    friday: PropTypes.number.isRequired,
    saturday: PropTypes.number.isRequired,
    sunday: PropTypes.number.isRequired,
  }).isRequired,
};

export * from './custom-tooltip';
