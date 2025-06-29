import { Clonable, Container } from '@nlpjs/core'

class Ner extends Clonable {
  constructor(settings?: Partial<NerSettings>, container?: Container);

  registerDefault(): void;

  getRulesByName(locale?: string, name?: string, force?: boolean): any;

  addRule(locale: string | string[], name: string, type: string, rule: any): void;

  asString(item: any): string;

  findRule(rules: any[], rule: any): number;

  removeRule(locale: string, name: string, rule?: any): void;

  getRules(locale?: string): any[];

  decideRules(srcInput: any, intentEntities: string[]): any;

  getRuleOption(rules: any[], option: any): any;

  addRuleOptionTexts(locale: string | string[], name: string, option: any, srcTexts?: string | string[]): void;

  removeRuleOptionTexts(locale: string | string[], name: string, option: any, srcTexts?: string | string[]): void;

  static str2regex(str: string): RegExp;

  static regex2str(regex: RegExp): string;

  addRegexRule(locale: string, name: string, srcRegex: string | RegExp): void;

  addBetweenLastCondition(
    locale: string,
    name: string,
    srcLeftWords: string | string[],
    srcRightWords: string | string[],
    srcOptions?: any,
  ): void;

  addBetweenCondition(
    locale: string,
    name: string,
    srcLeftWords: string | string[],
    srcRightWords: string | string[],
    srcOptions?: any,
  ): void;

  addPositionCondition(
    locale: string,
    name: string,
    position: number,
    srcWords: string | string[],
    srcOptions?: any,
  ): void;

  addAfterCondition(locale: string, name: string, words: string | string[], opts?: any): void;

  addAfterFirstCondition(locale: string, name: string, words: string | string[], opts?: any): void;

  addAfterLastCondition(locale: string, name: string, words: string | string[], opts?: any): void;

  addBeforeCondition(locale: string, name: string, words: string | string[], opts?: any): void;

  addBeforeFirstCondition(locale: string, name: string, words: string | string[], opts?: any): void;

  addBeforeLastCondition(locale: string, name: string, words: string | string[], opts?: any): void;

  reduceEdges(input: any): any;

  defaultPipelineProcess(input: any, intentEntities: string[]): Promise<any>;

  process(srcInput: any, consideredEntities?: string[]): Promise<any>;

  nameToEntity(name: string): string;

  entityToName(entity: string): string;

  isEntity(entity: string): boolean;

  getEntitiesFromUtterance(locale: string, utterance?: string): string[];

  generateEntityUtterance(locale: string, utterance: string): Promise<string>;

  toJSON(): any;

  fromJSON(json: any): void;
}

export interface NerSettings {
  tag: string;
  container: Container;
  threshold: number;
  entityPreffix: string;
  entitySuffix: string;
  considerOnlyIntentEntities: boolean;
}

declare class ExtractorEnum {
  constructor(container?: Container);

  getScripts(str: string): string[];

  isAlphanumeric(c: string): boolean;

  getWordPositions(str: string): { start: number; end: number; len: number }[];

  getBestSubstring(str1: string, str2: string, words1?: any[]): {
    start: number;
    end: number;
    len: number;
    levenshtein: number;
    accuracy: number
  };

  getBestSubstringList(str1: string, str2: string, words1?: any[], threshold?: number): {
    start: number;
    end: number;
    len: number;
    levenshtein: number;
    accuracy: number
  }[];

  getRules(input: any): any[];

  normalize(str: string): string;

  buildRuleDict(rule: any): void;

  getBestExact(srcText: string, words: any[], rule: any): any[];

  extractFromRule(text: string, rule: any, words: any[], threshold: number): any[];

  extract(srcInput: any): Promise<any>;

  run(srcInput: any): Promise<any>;
}

declare class ExtractorRegex {
  constructor(container?: Container);

  getRules(input: any): any[];

  getMatchs(utterance: string, regex: RegExp): any[];

  extractFromRule(text: string, rule: any): any[];

  extract(srcInput: any): any;

  run(srcInput: any): any;
}

declare class ExtractorTrim {
  constructor(container?: Container);

  mustSkip(word: string, condition: any): boolean;

  matchBetween(utterance: string, condition: any, name: string): any[];

  findWord(utterance: string, word: string, caseSensitive?: boolean, noSpaces?: boolean): any[];

  getBeforeResults(utterance: string, wordPositions: any[], name: string): any[];

  getBeforeFirstResults(utterance: string, wordPositions: any[], name: string): any[];

  getBeforeLastResults(utterance: string, wordPositions: any[], name: string): any[];

  getAfterResults(utterance: string, wordPositions: any[], name: string): any[];

  getAfterFirstResults(utterance: string, wordPositions: any[], name: string): any[];

  getAfterLastResults(utterance: string, wordPositions: any[], name: string): any[];

  getResults(utterance: string, wordPositions: any[], type: number, name: string): any[];

  match(utterance: string, condition: any, type: number, name: string): any[];

  getRules(input: any): any[];

  extractFromRule(utterance: string, rule: any): any[];

  extract(srcInput: any): any;

  run(srcInput: any): any;
}

declare class ExtractorBuiltin {
  constructor(container?: Container);

  extract(srcInput: any): any;

  run(srcInput: any): Promise<any>;
}

export {
  Ner,
  ExtractorEnum,
  ExtractorRegex,
  ExtractorTrim,
  ExtractorBuiltin,
}
