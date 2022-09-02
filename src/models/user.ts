import { ApiResponseUser } from "../api/types";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  todayScore: number;
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;

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

  get scorePercentage() {
    return this.todayScore * 100;
  }

  get formattedScorePercentage() {
    return `${this.scorePercentage}%`;
  }

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
