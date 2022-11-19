/* eslint-disable @typescript-eslint/no-explicit-any */
import { FORMAT_DATE_OPTIONS, UNITS } from '../../../constants';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export type ActivityCustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

/**
 * Custom Recharts tooltip for the activity graph.
 *
 * @type {React.FC<ActivityCustomTooltipProps>}
 * @param {ActivityCustomTooltipProps} props
 * @return {JSX.Element} JSX element
 *
 * @example
 * import { Tooltip } from 'recharts';
 *
 * <Tooltip
 *   content={ActivityCustomTooltip as any}
 *   wrapperStyle={{ outline: 'none' }}
 *   cursor={{ fill: 'gray', opacity: 0.1 }}
 * />
 */
export function ActivityCustomTooltip ({ active, payload }: ActivityCustomTooltipProps) {
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

ActivityCustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.any.isRequired,
};
