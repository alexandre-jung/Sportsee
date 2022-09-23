/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DAYS_MAP } from '../../../constants';
import { CustomTooltip } from './custom-tooltip';
import styles from './styles.module.scss';

export type AverageSessions = {
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
};

/**
 * Transforms the data from an AverageSessions model to a format that can be displayed
 * by the average sessions graph component.
 */
function adaptAverageSessionsData(averageSessions: AverageSessions) {
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
 */
export function AverageSessions({ averageSessions }: AverageSessionsProps) {
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
          content={CustomTooltip as any}
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
