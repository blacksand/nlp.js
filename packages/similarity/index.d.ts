export declare function leven(left: string, right: string): number;

declare function similarity(str1: string, str2: string, normalize?: boolean): number;

import { Container } from '@nlpjs/core'

export class CosineSimilarity {
  constructor(container?: Container);

  getTokens(text: string | string[], locale?: string): string[];

  termFreqMap(str: string, locale?: string): { [key: string]: number };

  addKeysToDict(map: { [key: string]: any }, dict: { [key: string]: any }): void;

  termFreqMapToVector(map: { [key: string]: number }, dict: { [key: string]: any }): number[];

  vecDotProduct(vecA: number[], vecB: number[]): number;

  vecMagnitude(vec: number[]): number;

  cosineSimilarity(vecA: number[], vecB: number[]): number;

  getTermFreqVectors(strA: string, strB: string, locale?: string): [number[], number[]];

  similarity(strA: string, strB: string, locale?: string): number;
}

export class SpellCheck {
  constructor(settings?: SpellCheckSettings);

  setFeatures(features: { [key: string]: any }): void;

  checkToken(token: string, distance: number): string;

  check(tokens: string[] | { [key: string]: any }, distance?: number): string[] | { [key: string]: any };
}

export interface SpellCheckSettings {
  minLength?: number;
  features?: { [key: string]: any };
}
