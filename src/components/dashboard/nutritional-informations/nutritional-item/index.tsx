import { FC } from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

type NutritionalItemProps = {
  value: number | string;
  unit: string;
  label: string;
  Icon: FC<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>;
};

/**
 * Displays a single nutritional information
 * with its value, unit, help text and a pretty icon.
 */
export function NutritionalItem ({
  value,
  unit,
  label,
  Icon,
}: NutritionalItemProps) {
  return (
    <div className={styles.nutritionalItem}>
      <Icon style={{ width: 50 }} />
      <div>
        <strong className={styles.value}>
          {value}
          {unit}
        </strong>
        <br />
        <small>{label}</small>
      </div>
    </div>
  );
}

NutritionalItem.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  unit: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
};
