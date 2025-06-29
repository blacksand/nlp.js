import { Clonable, Container } from '@nlpjs/core'

export class NluManager extends Clonable {
  constructor(settings?: Partial<NluManagerSettings>, container?: Container);

  registerDefault(): void;

  describeLanguage(locale: string, name: string): void;

  addLanguage(srcLocales: string | string[]): void;

  removeLanguage(locales: string | string[]): void;

  guessLanguage(srcInput: string | any): string | any;

  assignDomain(srcLocale: string, srcIntent: string, srcDomain?: string): void;

  getIntentDomain(srcLocale: string, intent: string): string;

  getDomains(): { [locale: string]: { [domain: string]: string[] } };

  consolidateLocale(srcLocale: string, utterance: string): string;

  consolidateManager(locale: string): DomainManager;

  add(srcLocale: string, utterance: string, intent: string): void;

  remove(srcLocale: string, utterance: string, intent: string): void;

  innerTrain(settings: any): Promise<any[]>;

  train(settings?: any): Promise<any>;

  fillLanguage(srcInput: any): any;

  classificationsIsNone(classifications: any[]): boolean;

  checkIfIsNone(srcInput: any): any;

  innerClassify(srcInput: any): Promise<any>;

  defaultPipelineProcess(input: any): Promise<any>;

  process(locale: string | any, utterance?: string, domain?: string, settings?: any): Promise<any>;

  toJSON(): any;

  fromJSON(json: any): void;
}

export interface NluManagerSettings {
  tag?: string;
  locales?: string[];
  domain?: any;
  useNoneFeature?: boolean;
  trainByDomain?: boolean;
}

export class Nlu extends Clonable {
  constructor(settings?: Partial<NluSettings>, container?: Container);

  registerDefault(): void;

  defaultPipelinePrepare(input: any): Promise<any>;

  defaultPipelineProcess(input: any): Promise<any>;

  prepare(text: string | any, srcSettings?: any): Promise<any>;

  doSpellCheck(input: any, srcSettings?: any): Promise<any>;

  prepareCorpus(srcInput: any): Promise<any>;

  addNoneFeature(input: any): any;

  convertToArray(srcInput: any): any;

  someSimilar(tokensA: any, tokensB: any): boolean;

  matchAllowList(intent: string, allowList: string[]): boolean;

  intentIsActivated(intent: string, tokens: any, allowList: any): boolean;

  filterNonActivated(srcInput: any): any;

  normalizeClassifications(srcInput: any): any;

  textToFeatures(srcInput: any): any;

  innerTrain(): Promise<void>;

  train(corpus: any, settings?: any): Promise<any>;

  getExplanation(input: any, explanation: any): Promise<any>;

  process(utterance: string, settings?: any): Promise<any>;

  toJSON(): any;

  fromJSON(json: any): void;
}

export interface NluSettings {
  locale?: string;
  tag?: string;
  keepStopwords?: boolean;
  nonefeatureValue?: number;
  nonedeltaMultiplier?: number;
  spellCheck?: boolean;
  spellCheckDistance?: number;
  filterZeros?: boolean;
  log?: boolean;
}

export class NluNeural extends Nlu {
  innerTrain(srcInput: any): Promise<any>;

  innerProcess(srcInput: any): any;

  registerDefault(): void;

  toJSON(): any;

  fromJSON(json: any): void;
}

export class DomainManager extends Clonable {
  constructor(settings?: Partial<DomainManagerSettings>, container?: Container);

  registerDefault(): void;

  getDomainInstance(domainName: string): Nlu;

  addDomain(name: string): Nlu;

  removeDomain(name: string): void;

  generateStemKey(srcTokens: string | string[]): Promise<string>;

  add(domain: string, utterance: string, intent: string): void;

  getSentences(): any[];

  remove(srcDomain: string, srcUtterance: string, srcIntent?: string): boolean;

  trainStemmer(srcInput: any): Promise<any>;

  innerGenerateCorpus(domainName?: string): any;

  generateCorpus(srcInput: any): Promise<any>;

  prepare(srcInput: any): Promise<any>;

  fillStemDict(srcInput: any): Promise<any>;

  innerTrain(srcInput: any): Promise<any>;

  train(settings?: any): Promise<any>;

  matchAllowList(intent: string, allowList: string[]): boolean;

  classifyByStemDict(utterance: string, domainName?: string, allowList?: string[]): Promise<any>;

  innerClassify(srcInput: any, domainName?: string): Promise<any>;

  defaultPipelineProcess(input: any): Promise<any>;

  process(utterance: string | any, settings?: any): Promise<any>;

  toJSON(): any;

  fromJSON(json: any): void;
}

export interface DomainManagerSettings {
  locale?: string;
  tag?: string;
  nluByDomain?: { [key: string]: { className: string; settings: any } };
  trainByDomain?: boolean;
  useStemDict?: boolean;
}