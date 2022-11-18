/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

type CustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

/**
 * Custom Recharts tooltip for the average sessions graph.
 */
export function CustomTooltip ({ active, payload }: CustomTooltipProps) {
  return (
    active && (
      <div className={styles.tooltip}>
        <div className={styles.tooltipDay}>
          {payload[0].payload.translatedDay}
        </div>
        {`${payload[0].payload.length} min`}
      </div>
    )
  );
}

CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.any.isRequired,
};
