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

declare class Language {
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

export {
  Language,
  LanguageInfo,
  LanguageGuessResult,
  DetectionSettings,
}
