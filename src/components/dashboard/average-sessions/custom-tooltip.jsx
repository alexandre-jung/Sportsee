import styles from "./styles.module.scss";

export function CustomTooltip({ active, payload }) {
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
