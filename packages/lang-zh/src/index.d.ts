import { Container } from '@nlpjs/core'

interface Token {
  text: string;
  start: number;
  end: number;
  length: number;
  dialect: string;
  variant: string | undefined;
}

interface IdentifyResult {
  tokens: Token[];
  simplifiedCount: number;
  traditionalCount: number;
  hkCount: number;
  twCount: number;
  noneCount: number;
  bothCount: number;
  dialect: string;
  variant: string;
}

declare class LangZh {
  constructor(container: Container);

  register(container: Container): void;
}

declare class TokenizerZh {
  constructor(container?: Container);

  tokenize(text: string): string[];
}

declare class StemmerZh {
  constructor(container?: Container);

  stem(word: string): string;
}

declare class StopwordsZh {
  name: string
  dictionary: Record<string, boolean>

  constructor(container?: Container, words?: string[]);

  build(list: string[]): void;
}

declare class NormalizerZh {
  constructor(container?: Container);

  normalize(text: string): string;
}

declare class SentimentZh {
  constructor(container?: Container);

  getSentiment(utterance: string, locale?: string): {
    score: number;
    numWords: number;
    numHits: number;
    average: number;
    type: string;
    locale: string
  };
}

declare class TranslateZh {
  both: Record<string, boolean>
  st: Record<string, string>
  ts: Record<string, string>
  stPhrases: Record<string, string>
  tsPhrases: Record<string, string>
  hkVariants: Record<string, string>
  hkVariantsInverse: Record<string, string>
  hkPhrases: Record<string, string>
  hkPhrasesInverse: Record<string, string>
  hkRevPhrases: Record<string, string>
  twVariants: Record<string, string>
  twVariantsInverse: Record<string, string>
  twPhrases: Record<string, string>
  twPhrasesInverse: Record<string, string>
  twRevPhrases: Record<string, string>

  constructor();

  inversify(dict: Record<string, string>): Record<string, string>;

  canGetSlice(processedPositions: boolean[], start: number, currentLength: number): boolean;

  createToken(
    text: string,
    processedPositions: boolean[],
    start: number,
    currentLength: number,
    dialect: string,
    variant: string | undefined,
  ): Token;

  identifyByLength(sentence: string, processedPositions: boolean[], currentLength: number): Token[];

  isChineseChar(ch: string): boolean;

  identifyByChar(sentence: string, processedPositions: boolean[]): Token[];

  identify(sentence: string): IdentifyResult;

  findIndDict(text: string, start: number, dictionaries: Record<string, string> | Record<string, string>[]): {
    source: string;
    target: string
  } | undefined;

  translateByDict(text: string, dict: Record<string, string> | Record<string, string>[]): string;

  translateChain(text: string, dictionaries: (Record<string, string> | Record<string, string>[])[]): string;

  simplifiedToTraditional(text: string): string;

  simplifiedToHongKong(text: string): string;

  simplifiedToTaiwan(text: string): string;

  hongKongToSimplified(text: string): string;

  traditionalToHongKong(text: string): string;

  hongKongToTraditional(text: string): string;

  traditionalToSimplified(text: string): string;

  traditionalToTaiwan(text: string): string;

  taiwanToTraditional(text: string): string;

  taiwanToSimplified(text: string): string;

  simplifiedTo(text: string, target: string): string;

  traditionalTo(text: string, target: string): string;

  hkTo(text: string, target: string): string;

  twTo(text: string, target: string): string;

  translate(text: string, source: string, target?: string): string;
}

export {
  LangZh,
  NormalizerZh,
  SentimentZh,
  StemmerZh,
  StopwordsZh,
  TokenizerZh,
  TranslateZh,
}

export type { Token, IdentifyResult }

