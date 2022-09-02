import { FC } from 'react';
import styles from './styles.module.scss';

type NutritionalItemProps = {
  value: number | string;
  unit: string;
  label: string;
  Icon: FC<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

export function NutritionalItem({
  value,
  unit,
  label,
  Icon,
}: NutritionalItemProps) {
  return (
    <div className={styles.nutritionalItem}>
      <Icon style={{ width: 50 }} />
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
