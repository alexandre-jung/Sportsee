import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { Performance as PerformanceModel } from '../../../models';
import PropTypes from 'prop-types';

export const PERFORMANCE_SUBJECT_MAP: { [key: string]: string } = {
  intensity: 'Intensité',
  speed: 'Vitesse',
  strength: 'Force',
  endurance: 'Endurance',
  energy: 'Énergie',
  cardio: 'Cardio',
};

/**
 * Transforms the data from a Performance model to a format that can be displayed
 * by the performance graph component.
 */
function adaptPerformanceData (performance: PerformanceModel) {
  return Object.entries(performance).map(([key, value]) => ({
    subject: PERFORMANCE_SUBJECT_MAP[key],
    value,
  }));
}

export type PerformanceProps = {
  performance: { [key: string]: number };
};

/**
 * The performance graph.
 */
export function Performance ({ performance }: PerformanceProps) {
  const data = adaptPerformanceData(performance);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="50%"
        data={data}
        style={{ backgroundColor: '#282D30' }}
      >
        <PolarGrid stroke="white" />
        <PolarAngleAxis
          stroke="white"
          dataKey="subject"
          tick={{ fontSize: '10px' }}
          tickLine={false}
        />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#e60000"
          fill="#e60000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

Performance.propTypes = {
  performance: PropTypes.exact({
    intensity: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    endurance: PropTypes.number.isRequired,
    energy: PropTypes.number.isRequired,
    cardio: PropTypes.number.isRequired,
  }).isRequired,
};
