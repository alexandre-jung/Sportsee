/**
 * Types of API responses for every endpoint.
 */
export type ApiResponseActivity = {
  data: {
    userId: number;
    sessions: [
      {
        day: string;
        kilogram: number;
        calories: number;
      }
    ];
  };
};

export type Session = {
  day: string;
  sessionLength: number;
};

export type ApiResponseAverageSessions = {
  data: {
    userId: number;
    sessions: Session[];
  };
};

export type PerformanceItem = {
  value: number;
  kind: number;
};

export type Kind = {
  [key: string]: string;
};

export type ApiResponsePerformance = {
  data: {
    userId: number;
    kind: Kind;
    data: PerformanceItem[];
  };
};

export type ApiResponseUser = {
  data: {
    id: number;
    userInfos: {
      firstName: string;
      lastName: string;
      age: number;
    };
    todayScore: number;
    keyData: {
      calorieCount: number;
      proteinCount: number;
      carbohydrateCount: number;
      lipidCount: number;
    };
  };
};
