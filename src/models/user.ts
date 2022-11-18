import { ApiResponseUser } from '../api/types';

/**
 * A model that represents the user data.
 */
export class User {
  id!: number;
  firstName!: string;
  lastName!: string;
  age!: number;
  todayScore!: number;
  calorieCount!: number;
  proteinCount!: number;
  carbohydrateCount!: number;
  lipidCount!: number;

  // noinspection JSUnusedGlobalSymbols
  /**
   * Builds a User model from the data returned by the API.
   *
   * @param { ApiResponseUser } apiRawData the raw api data
   * @returns { User } User
   */
  static fromApiData(apiRawData: ApiResponseUser) {
    const { id, userInfos, todayScore, keyData } = apiRawData.data;
    const user = new User();
    user.id = id;
    user.firstName = userInfos.firstName;
    user.lastName = userInfos.lastName;
    user.age = userInfos.age;
    user.todayScore = todayScore;
    user.calorieCount = keyData.calorieCount;
    user.proteinCount = keyData.proteinCount;
    user.carbohydrateCount = keyData.carbohydrateCount;
    user.lipidCount = keyData.lipidCount;
    return user;
  }

  /**
   * Returns the today score as a percentage number.
   *
   * @return { number } score
   */
  get scorePercentage() {
    return this.todayScore * 100;
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Return the today score as a formatted percentage string.
   *
   * @return { string } formatted score
   */
  get formattedScorePercentage() {
    return `${this.scorePercentage}%`;
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Returns an object containing nutritional information for the user.
   *
   * @return {{
   *  calorieCount: number,
   *  proteinCount: number,
   *  carbohydrateCount: carbohydrate,
   *  lipidCount: lipid,
   * }} nutritional information
   */
  get nutritionalInformations() {
    const {
      calorieCount: calorie,
      proteinCount: protein,
      carbohydrateCount: carbohydrate,
      lipidCount: lipid,
    } = this;

    return {
      calorie,
      protein,
      carbohydrate,
      lipid,
    };
  }
}
