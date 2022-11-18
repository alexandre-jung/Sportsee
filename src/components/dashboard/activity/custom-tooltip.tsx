/* eslint-disable @typescript-eslint/no-explicit-any */
import { FORMAT_DATE_OPTIONS, UNITS } from '../../../constants';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

type CustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

/**
 * Custom Recharts tooltip for the activity graph.
 */
export function CustomTooltip ({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <div className={styles.tooltipDay}>
          {payload[0].payload.day.toLocaleDateString(
            'fr-FR',
            FORMAT_DATE_OPTIONS,
          )}
        </div>
        {`${payload[0].payload.kilogram} kg`}
        <br />
        <span className={styles.tooltipCalories}>
          {`${payload[0].payload.calories} ${UNITS.calorie}`}
        </span>
      </div>
    );
  }
  return <></>;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.any.isRequired,
};
