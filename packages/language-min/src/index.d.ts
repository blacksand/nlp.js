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

import { Clonable } from '@nlpjs/core'

declare namespace LanguageMin {
  interface LanguageInfo {
    alpha2: string;
    alpha3: string;
    name: string;
  }

  interface LanguageGuessResult {
    alpha3: string;
    alpha2: string;
    language: string;
    score: number;
  }

  interface DetectionSettings {
    minLength?: number;
    allowList?: string[];
    denyList?: string[];
  }

  class Language extends Clonable {
    languagesAlpha3: Record<string, LanguageInfo>
    languagesAlpha2: Record<string, LanguageInfo>
    extraSentences: [string, string][]

    constructor();

    static getTrigrams(srcValue: string): string[];

    static asTuples(value: string): [string, number][];

    static getDistance(trigrams: [string, number][], model: Record<string, number>): number;

    static getOccurrence(value: string, expression: RegExp): number;

    static isLatin(value: string): boolean;

    static getTopScript(value: string): [string, number];

    static filterLanguages(
      languages: Record<string, Record<string, number>>,
      allowList: string[],
      denyList: string[],
    ): Record<string, Record<string, number>>;

    static getDistances(
      trigrams: [string, number][],
      srcLanguages: Record<string, Record<string, number>>,
      options: DetectionSettings,
    ): [string, number][];

    static detectAll(srcValue: string, settings?: DetectionSettings): [string, number][];

    static lansplit(s: string): string[];

    static addModel(script: string, name: string, value: string): void;

    static buildModel(): void;

    buildData(): void;

    transformAllowList(allowList: string[]): string[];

    guess(utterance: string, allowList?: string[], limit?: number): LanguageGuessResult[];

    guessBest(utterance: string, allowList?: string[]): LanguageGuessResult;

    addTrigrams(locale: string, sentence: string): void;

    addExtraSentence(locale: string, sentence: string): void;

    processExtraSentences(): void;

    addModel(script: string, name: string, value: string): void;
  }
}

declare const language: {
  Language: typeof LanguageMin.Language;
}

export = language;
