import { ApiResponsePerformance } from '../api/types';

export class Performance {
  [key: string]: number;

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
