export class NeuralNetwork {
  readonly isRunnable: boolean

  constructor(settings?: Partial<NeuralNetworkSettings>);

  applySettings(obj: any, settings: any): any;

  initialize(numInputs: number, outputNames: string[]): void;

  runInputPerceptron(perceptron: any, input: any): number;

  runInput(input: any): { [key: string]: number };

  run(input: any): { [key: string]: number } | undefined;

  prepareCorpus(corpus: any[]): any;

  verifyIsInitialized(): void;

  trainPerceptron(perceptron: any, data: any[]): number;

  train(corpus: any[]): {
    error: number;
    deltaError: number;
    iterations: number;
  };

  explain(input: any, intent: string): {
    weights: { [key: string]: number };
    bias: number;
  };

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
}
