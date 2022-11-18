import { ApiResponsePerformance } from '../api/types';

/**
 * A model that represents the performance data.
 */
export class Performance {
  [key: string]: number;

  // noinspection JSUnusedGlobalSymbols
  /**
   * Builds a Performance model from the data returned by the API.
   *
   * @param { ApiResponsePerformance } apiRawData the raw api data
   * @returns { Performance } Performance
   */
  static fromApiData(apiRawData: ApiResponsePerformance) {
    const { kind: kindMap, data } = apiRawData.data;
    const performance = new Performance();
    for (const { kind: dataKindIndex, value } of Object.values(data)) {
      const label = kindMap[dataKindIndex];
      performance[label] = value;
    }
    return performance;
  }
}
