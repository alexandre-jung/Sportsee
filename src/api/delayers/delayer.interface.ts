/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class Delayer {
  abstract delay(resolve: (data: any) => void, data: any): void;
}
