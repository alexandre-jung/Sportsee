import styles from "./styles.module.scss";

export function NutritionalItem({ value, unit, label, Icon }) {
  return (
    <div className={styles.nutritionalItem}>
      <Icon />
      <div>
        <strong>
          {value}
          {unit}
        </strong>
        <br />
        <small>{label}</small>
      </div>
    </div>
  );
}
