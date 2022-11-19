import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export type ScoreProps = {
  scorePercentage: number;
};

/**
 * The today's score progress ring.
 *
 * @type {React.FC<ScoreProps>}
 * @param {ScoreProps} props
 * @return {JSX.Element} JSX element
 *
 * @example
 * <Score scorePercentage={(user as models.User).scorePercentage} />
 */
export function Score ({ scorePercentage }: ScoreProps): JSX.Element {
  const data = [
    {
      scorePercentage,
      fill: '#e60000',
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="70%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar background dataKey="scorePercentage" cornerRadius={'50%'} />
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          className={styles.label}
        >
          Score
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.value}
        >
          {scorePercentage}%
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.helpText}
        >
          de votre
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.helpText}
        >
          objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

Score.propTypes = {
  scorePercentage: PropTypes.number.isRequired,
};
