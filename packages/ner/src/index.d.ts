import { Clonable, Container } from '@nlpjs/core'

type TrimTypeValue = 'between' | 'after' | 'afterLast' | 'afterFirst' | 'before' | 'beforeFirst' | 'beforeLast';

const enum TrimType {
  Between = 'between',
  After = 'after',
  AfterLast = 'afterLast',
  AfterFirst = 'afterFirst',
  Before = 'before',
  BeforeFirst = 'beforeFirst',
  BeforeLast = 'beforeLast',
}

interface Rule {
  name: string;
  type: string;
  rules: any[];
}

interface RuleOption {
  option: string;
  texts: string[];
}

interface Edge {
  start: number;
  end: number;
  len: number;
  accuracy: number;
  sourceText: string;
  utteranceText: string;
  entity: string;
  type: string;

  [key: string]: any;
}

interface NerInput {
  locale?: string;
  text?: string;
  utterance?: string;
  threshold?: number;
  edges?: Edge[];
  nerRules?: Rule[];
  nerLimitToEntities?: boolean;
  intentEntities?: string[];

  [key: string]: any;
}

interface NerOutput extends NerInput {
  entities?: Edge[];
}

interface PositionConditionOptions {
  caseSensitive?: boolean;
  noSpaces?: boolean;
  skip?: string[];

  [key: string]: any;
}

interface BetweenConditionOptions extends PositionConditionOptions {
  closest?: boolean;
}

class Ner extends Clonable {
  constructor(settings?: Partial<NerSettings>, container?: Container);

  static str2regex(str: string): RegExp;

  static regex2str(regex: RegExp): string;

  registerDefault(): void;

  getRulesByName(locale?: string, name?: string, force?: boolean): Rule | undefined;

  addRule(locale: string | string[], name: string, type: string, rule: any): void;

  asString(item: any): string;

  findRule(rules: any[], rule: any): number;

  removeRule(locale: string, name: string, rule?: any): void;

  getRules(locale?: string): Rule[];

  decideRules(srcInput: NerInput, intentEntities: string[]): NerInput;

  getRuleOption(rules: RuleOption[], option: string): RuleOption | undefined;

  addRuleOptionTexts(locale: string | string[], name: string, option: string, srcTexts?: string | string[]): void;

  removeRuleOptionTexts(locale: string | string[], name: string, option: string, srcTexts?: string | string[]): void;

  addRegexRule(locale: string, name: string, srcRegex: string | RegExp): void;

  addBetweenLastCondition(
    locale: string,
    name: string,
    srcLeftWords: string | string[],
    srcRightWords: string | string[],
    srcOptions?: BetweenConditionOptions,
  ): void;

  addBetweenCondition(
    locale: string,
    name: string,
    srcLeftWords: string | string[],
    srcRightWords: string | string[],
    srcOptions?: BetweenConditionOptions,
  ): void;

  addPositionCondition(
    locale: string,
    name: string,
    position: TrimTypeValue,
    srcWords: string | string[],
    srcOptions?: PositionConditionOptions,
  ): void;

  addAfterCondition(locale: string, name: string, words: string | string[], opts?: PositionConditionOptions): void;

  addAfterFirstCondition(
    locale: string,
    name: string,
    words: string | string[],
    opts?: PositionConditionOptions,
  ): void;

  addAfterLastCondition(
    locale: string,
    name: string,
    words: string | string[],
    opts?: PositionConditionOptions,
  ): void;

  addBeforeCondition(locale: string, name: string, words: string | string[], opts?: PositionConditionOptions): void;

  addBeforeFirstCondition(
    locale: string,
    name: string,
    words: string | string[],
    opts?: PositionConditionOptions,
  ): void;

  addBeforeLastCondition(
    locale: string,
    name: string,
    words: string | string[],
    opts?: PositionConditionOptions,
  ): void;

  reduceEdges(input: NerInput): NerOutput;

  defaultPipelineProcess(input: NerInput, intentEntities: string[]): Promise<NerOutput>;

  process(srcInput: NerInput, consideredEntities?: string[]): Promise<NerOutput>;

  nameToEntity(name: string): string;

  entityToName(entity: string): string;

  isEntity(entity: string): boolean;

  getEntitiesFromUtterance(locale: string, utterance?: string): string[];

  generateEntityUtterance(locale: string, utterance: string): Promise<string>;

  toJSON(): { settings: Partial<NerSettings>; rules: Record<string, Record<string, Rule>> };

  fromJSON(json: { settings: Partial<NerSettings>; rules: Record<string, Record<string, Rule>> }): void;
}

interface NerSettings {
  tag?: string;
  container?: Container;
  threshold?: number;
  entityPreffix?: string;
  entitySuffix?: string;
  sufix?: string;
  considerOnlyIntentEntities?: boolean;
}

interface WordPosition {
  start: number;
  end: number;
  len: number;
}

interface SubstringMatch {
  start: number;
  end: number;
  len: number;
  levenshtein: number;
  accuracy: number;
}

class ExtractorEnum {
  constructor(container?: Container);

  getScripts(str: string): string[];

  isAlphanumeric(c: string): boolean;

  getWordPositions(str: string): WordPosition[];

  getBestSubstring(str1: string, str2: string, words1?: WordPosition[]): SubstringMatch;

  getBestSubstringList(str1: string, str2: string, words1?: WordPosition[], threshold?: number): SubstringMatch[];

  getRules(input: NerInput): Rule[];

  normalize(str: string): string;

  buildRuleDict(rule: Rule): void;

  getBestExact(srcText: string, words: WordPosition[], rule: Rule): Edge[];

  extractFromRule(text: string, rule: Rule, words: WordPosition[], threshold: number): Edge[];

  extract(srcInput: NerInput): Promise<NerInput>;

  run(srcInput: NerInput): Promise<NerInput>;
}

class ExtractorRegex {
  constructor(container?: Container);

  getRules(input: NerInput): Rule[];

  getMatchs(utterance: string, regex: RegExp): Edge[];

  extractFromRule(text: string, rule: Rule): Edge[];

  extract(srcInput: NerInput): NerInput;

  run(srcInput: NerInput): NerInput;
}

interface TrimCondition {
  type: TrimTypeValue;
  words: string[];
  options: PositionConditionOptions;
  regex?: RegExp;
}

class ExtractorTrim {
  constructor(container?: Container);

  mustSkip(word: string, condition: TrimCondition): boolean;

  matchBetween(utterance: string, condition: TrimCondition, name: string): Edge[];

  findWord(utterance: string, word: string, caseSensitive?: boolean, noSpaces?: boolean): WordPosition[];

  getBeforeResults(utterance: string, wordPositions: WordPosition[], name: string): Edge[];

  getBeforeFirstResults(utterance: string, wordPositions: WordPosition[], name: string): Edge[];

  getBeforeLastResults(utterance: string, wordPositions: WordPosition[], name: string): Edge[];

  getAfterResults(utterance: string, wordPositions: WordPosition[], name: string): Edge[];

  getAfterFirstResults(utterance: string, wordPositions: WordPosition[], name: string): Edge[];

  getAfterLastResults(utterance: string, wordPositions: WordPosition[], name: string): Edge[];

  getResults(utterance: string, wordPositions: WordPosition[], type: TrimTypeValue, name: string): Edge[];

  match(utterance: string, condition: TrimCondition, type: TrimTypeValue, name: string): Edge[];

  getRules(input: NerInput): Rule[];

  extractFromRule(utterance: string, rule: Rule): Edge[];

  extract(srcInput: NerInput): NerInput;

  run(srcInput: NerInput): NerInput;
}

class ExtractorBuiltin {
  constructor(container?: Container);

  extract(srcInput: NerInput): NerInput;

  run(srcInput: NerInput): Promise<NerInput>;
}

export {
  ExtractorBuiltin,
  ExtractorEnum,
  ExtractorRegex,
  ExtractorTrim,
  Ner,
}

export type {
  BetweenConditionOptions,
  Edge,
  NerInput,
  NerOutput,
  NerSettings,
  PositionConditionOptions,
  Rule,
  RuleOption,
  SubstringMatch,
  TrimType,
  TrimTypeValue,
  WordPosition,
}
