
import { Clonable, Container } from '@nlpjs/core';

export interface SentimentAnalyzerSettings {
  tag?: string;
  container?: Container;
}

export interface SentimentResult {
  score: number;
  numWords: number;
  numHits: number;
  average: number;
  type: string;
  locale: string;
  vote?: 'positive' | 'negative' | 'neutral';
}

export interface SentimentInput {
  text?: string;
  utterance?: string;
  locale: string;
  settings?: SentimentAnalyzerSettings;
  tokens?: string[];
  sentiment?: SentimentResult;
  sentimentDictionary?: {
    type: string;
    dictionary: { [key: string]: number };
    negations: string[];
    stemmed: boolean;
  };
}

export class SentimentAnalyzer extends Clonable {
  constructor(settings?: Partial<SentimentAnalyzerSettings>, container?: Container);

  registerDefault(): void;

  prepare(locale: string, text: string, settings?: SentimentAnalyzerSettings, stemmed?: boolean): string[] | Promise<string[]>;

  getDictionary(srcInput: SentimentInput): Promise<SentimentInput>;

  getTokens(srcInput: SentimentInput): Promise<SentimentInput>;

  calculate(srcInput: SentimentInput): SentimentInput;

  defaultPipelineProcess(input: SentimentInput): Promise<SentimentInput>;

  process(srcInput: SentimentInput, settings?: SentimentAnalyzerSettings): Promise<SentimentInput>;
}
