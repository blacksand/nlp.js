import { Clonable, Container } from '@nlpjs/core'

export class SentimentAnalyzer extends Clonable {
  constructor(settings?: Partial<SentimentAnalyzerSettings>, container?: Container);

  registerDefault(): void;

  prepare(locale: string, text: string, settings?: any, stemmed?: boolean): string[] | Promise<string[]>;

  getDictionary(srcInput: any): Promise<any>;

  getTokens(srcInput: any): Promise<any>;

  calculate(srcInput: any): any;

  defaultPipelineProcess(input: any): Promise<any>;

  process(srcInput: any, settings?: any): Promise<any>;
}

export interface SentimentAnalyzerSettings {
  tag?: string;
  container?: Container;
}