export class Performance {
  static fromApiData(apiRawData) {
    const { kind: kindMap, data } = apiRawData.data;
    const performance = new Performance();
    for (const { kind: dataKindIndex, value } of Object.values(data)) {
      const label = kindMap[dataKindIndex];
      performance[label] = value;
    }
    return performance;
  }
}
