import { NutritionalItem } from "./nutritional-item";
import { UNITS } from "../../../constants";
import { ReactComponent as FireIcon } from "/src/assets/images/fire-icon.svg";
import { ReactComponent as ChickenThighIcon } from "/src/assets/images/chicken-thigh-icon.svg";
import { ReactComponent as AppleIcon } from "/src/assets/images/apple-icon.svg";
import { ReactComponent as BurgerIcon } from "/src/assets/images/burger-icon.svg";
import { formatNumber } from "../../../utils";

export function NutritionalInformations({
  calorie,
  protein,
  carbohydrate,
  lipid,
}) {
  const formattedCalorie = formatNumber(calorie);

  return (
    <>
      <h2>Informations nutritrionnelles</h2>
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
    </>
  );
}
