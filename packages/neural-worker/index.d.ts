import { Clonable, Container } from '@nlpjs/core'

export class NeuralNetwork extends Clonable {
  readonly isRunnable: boolean

  constructor(settings?: Partial<NeuralNetworkSettings>, container?: Container);

  initialize(): void;

  run(srcInput: any): any;

  explain(input: any, intent: string): {
    weights: { [key: string]: number };
    bias: number;
  };

  runInput(input: any): number[];

  verifyIsInitialized(data: any): void;

  train(srcData: any[]): Promise<any> | {
    error: number;
    deltaError: number;
    iterations: number;
  };

  calculateDeltas(incoming: any, target: any, outputs: any, marknode: any): number;

  formatData(data: any[]): any[];

  adjust(n: number): number;

  toJSON(): any;

  fromJSON(json: any): void;
}

export interface NeuralNetworkSettings {
  iterations: number;
  errorThresh: number;
  deltaErrorThresh: number;
  learningRate: number;
  momentum: number;
  alpha: number;
  log: boolean | ((status: any, time: number) => void);
  fixedError: boolean;
  maxDecimals: number;
}
