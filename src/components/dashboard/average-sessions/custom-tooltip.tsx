/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles.module.scss';

type CustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

export function CustomTooltip({ active, payload }: CustomTooltipProps) {
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
