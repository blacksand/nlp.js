import { Container } from '@nlpjs/core'

export function leven(left: string, right: string): number;

export function similarity(
  str1: string,
  str2: string,
  normalize?: boolean,
): number;

interface TermFreq {
  [key: string]: number;
}

interface Dict {
  [key: string]: boolean;
}

export class CosineSimilarity {
  public container?: Container

  constructor(container?: Container);

  getTokens(text: string | string[], locale?: string): string[];

  termFreqMap(str: string, locale?: string): TermFreq;

  addKeysToDict(map: TermFreq, dict: Dict): void;

  termFreqMapToVector(map: TermFreq, dict: Dict): number[];

  vecDotProduct(vecA: number[], vecB: number[]): number;

  vecMagnitude(vec: number[]): number;

  cosineSimilarity(vecA: number[], vecB: number[]): number;

  getTermFreqVectors(
    strA: string,
    strB: string,
    locale?: string,
  ): [number[], number[]];

  similarity(strA: string, strB: string, locale?: string): number;
}

interface Features {
  [key: string]: number;
}

interface FeaturesByLength {
  [key: string]: string[];
}

export class SpellCheck {
  public settings: SpellCheckSettings
  public minLength: number
  public features: Features
  public featuresByLength: FeaturesByLength
  public featuresList: string[]

  constructor(settings?: SpellCheckSettings);

  setFeatures(features: Features): void;

  checkToken(token: string, distance: number): string;

  check(tokens: string[] | Features, distance?: number): string[] | Features;
}

interface SpellCheckSettings {
  minLength?: number;
  features?: Features;
}

export type { TermFreq, Dict, Features, FeaturesByLength, SpellCheckSettings }
