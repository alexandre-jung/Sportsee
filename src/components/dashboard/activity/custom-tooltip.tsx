/* eslint-disable @typescript-eslint/no-explicit-any */
import { UNITS, FORMAT_DATE_OPTIONS } from '../../../constants';
import styles from './styles.module.scss';

type CustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

/**
 * Custom Recharts tooltip for the activity graph.
 */
export function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <div className={styles.tooltipDay}>
          {payload[0].payload.day.toLocaleDateString(
            'fr-FR',
            FORMAT_DATE_OPTIONS
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
