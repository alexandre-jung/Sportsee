import { NutritionalItem } from './nutritional-item';
import { UNITS } from '../../../constants';
import { ReactComponent as FireIcon } from '/src/assets/images/fire-icon.svg';
import { ReactComponent as ChickenThighIcon } from '/src/assets/images/chicken-thigh-icon.svg';
import { ReactComponent as AppleIcon } from '/src/assets/images/apple-icon.svg';
import { ReactComponent as BurgerIcon } from '/src/assets/images/burger-icon.svg';
import { formatNumber } from '../../../utils';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export type NutritionalInformationsProps = {
  calorie: number;
  protein: number;
  carbohydrate: number;
  lipid: number;
};

/**
 * Displays the user's nutritional information in a vertical box of items.
 *
 * @type {React.FC<NutritionalInformationsProps>}
 * @param {NutritionalInformationsProps} props
 * @return {JSX.Element} JSX element
 *
 * @example
 * <NutritionalInformations
 *   calorie={(user as models.User).calorieCount}
 *   protein={(user as models.User).proteinCount}
 *   carbohydrate={(user as models.User).carbohydrateCount}
 *   lipid={(user as models.User).lipidCount}
 * />
 */
export function NutritionalInformations ({
  calorie,
  protein,
  carbohydrate,
  lipid,
}: NutritionalInformationsProps) {
  const formattedCalorie = formatNumber(calorie);

  return (
    <div className={styles.nutritionalInformations}>
      <NutritionalItem
        value={formattedCalorie}
        unit={UNITS.calorie}
        label="Calories"
        Icon={FireIcon}
      />
      <NutritionalItem
        value={protein}
        unit={UNITS.protein}
        label="Protéines"
        Icon={ChickenThighIcon}
      />
      <NutritionalItem
        value={carbohydrate}
        unit={UNITS.carbohydrate}
        label="Glucides"
        Icon={AppleIcon}
      />
      <NutritionalItem
        value={lipid}
        unit={UNITS.lipid}
        label="Lipides"
        Icon={BurgerIcon}
      />
    </div>
  );
}

NutritionalInformations.propTypes = {
  calorie: PropTypes.number.isRequired,
  protein: PropTypes.number.isRequired,
  carbohydrate: PropTypes.number.isRequired,
  lipid: PropTypes.number.isRequired,
};
