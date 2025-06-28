/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

declare namespace LangZhNamespace {
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

  class LangZh {
    constructor(container: any);
    register(container: any): void;
  }

  class TokenizerZh {
    constructor(container: any);
    tokenize(text: string): string[];
  }

  class StemmerZh {
    constructor(container: any);
    stem(word: string): string;
  }

  class StopwordsZh {
    constructor(container: any, words?: string[]);
    name: string;
    dictionary: Record<string, boolean>;
    build(list: string[]): void;
  }

  class NormalizerZh {
    constructor(container: any);
    normalize(text: string): string;
  }

  class SentimentZh {
    constructor(container: any);
    getSentiment(utterance: string, locale?: string): { score: number; numWords: number; numHits: number; average: number; type: string; locale: string };
  }

  class TranslateZh {
    constructor();
    both: Record<string, boolean>;
    st: Record<string, string>;
    ts: Record<string, string>;
    stPhrases: Record<string, string>;
    tsPhrases: Record<string, string>;
    hkVariants: Record<string, string>;
    hkVariantsInverse: Record<string, string>;
    hkPhrases: Record<string, string>;
    hkPhrasesInverse: Record<string, string>;
    hkRevPhrases: Record<string, string>;
    twVariants: Record<string, string>;
    twVariantsInverse: Record<string, string>;
    twPhrases: Record<string, string>;
    twPhrasesInverse: Record<string, string>;
    twRevPhrases: Record<string, string>;

    inversify(dict: Record<string, string>): Record<string, string>;
    canGetSlice(processedPositions: boolean[], start: number, currentLength: number): boolean;
    createToken(text: string, processedPositions: boolean[], start: number, currentLength: number, dialect: string, variant: string | undefined): Token;
    identifyByLength(sentence: string, processedPositions: boolean[], currentLength: number): Token[];
    isChineseChar(ch: string): boolean;
    identifyByChar(sentence: string, processedPositions: boolean[]): Token[];
    identify(sentence: string): IdentifyResult;
    findIndDict(text: string, start: number, dictionaries: Record<string, string> | Record<string, string>[]): { source: string; target: string } | undefined;
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
}

declare const langZh: {
  LangZh: typeof LangZhNamespace.LangZh;
  TokenizerZh: typeof LangZhNamespace.TokenizerZh;
  StemmerZh: typeof LangZhNamespace.StemmerZh;
  StopwordsZh: typeof LangZhNamespace.StopwordsZh;
  NormalizerZh: typeof LangZhNamespace.NormalizerZh;
  SentimentZh: typeof LangZhNamespace.SentimentZh;
  TranslateZh: typeof LangZhNamespace.TranslateZh;
};

export = langZh;
