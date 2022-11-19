/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export type AverageSessionsCustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

/**
 * Custom Recharts tooltip for the average sessions graph.
 *
 * @type {React.FC<AverageSessionsCustomTooltipProps>}
 * @param {AverageSessionsCustomTooltipProps} props
 * @return {JSX.Element} JSX element
 *
 * @example
 * import { Tooltip } from 'recharts';
 *
 * <Tooltip
 *   content={AverageSessionsCustomTooltip as any}
 *   wrapperStyle={{ outline: 'none' }}
 * />
 */
export function AverageSessionsCustomTooltip ({ active, payload }: AverageSessionsCustomTooltipProps) {
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

AverageSessionsCustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.any.isRequired,
};
