import { Clonable, Container } from '@nlpjs/core'

export class Nlp extends Clonable {
  onIntent: (nlp: Nlp, result: any) => Promise<void>

  constructor(settings?: Partial<NlpSettings>, container?: Container);

  registerDefault(): void;

  initialize(): void;

  start(): Promise<void>;

  loadOrTrain(): Promise<void>;

  useNlu(clazz: any, locale: string | string[], domain: string, settings: any): void;

  guessLanguage(input: string): string;

  addLanguage(locales: string | string[]): void;

  removeLanguage(locales: string | string[]): void;

  addAdditionalEnumEntityUtterances(): void;

  replaceEnumEntitiesInSentence(
    manager: any,
    locale: string,
    domain: string,
    utterance: string,
    intent: string,
    entityList: string[],
    replaceTexts: { [key: string]: string[] },
  ): void;

  addDocument(locale: string, utterance: string, intent: string): any;

  removeDocument(locale: string, utterance: string, intent: string): any;

  getRulesByName(locale: string, name: string): any;

  addNerRule(locale: string, name: string, type: string, rule: any): any;

  removeNerRule(locale: string, name: string, rule: any): any;

  addNerRuleOptionTexts(locale: string, name: string, option: any, texts: any): any;

  removeNerRuleOptionTexts(locale: string, name: string, option: any, texts: any): any;

  addNerRegexRule(locale: string, name: string, regex: string | RegExp): any;

  addNerBetweenCondition(locale: string, name: string, left: any, right: any, opts: any): any;

  addNerBetweenLastCondition(locale: string, name: string, left: any, right: any, opts: any): any;

  addNerPositionCondition(locale: string, name: string, position: any, words: any, opts: any): any;

  addNerAfterCondition(locale: string, name: string, words: any, opts: any): any;

  addNerAfterFirstCondition(locale: string, name: string, words: any, opts: any): any;

  addNerAfterLastCondition(locale: string, name: string, words: any, opts: any): any;

  addNerBeforeCondition(locale: string, name: string, words: any, opts: any): any;

  addNerBeforeFirstCondition(locale: string, name: string, words: any, opts: any): any;

  addNerBeforeLastCondition(locale: string, name: string, words: any, opts: any): any;

  assignDomain(locale: string, intent: string, domain: string): any;

  getIntentDomain(locale: string, intent: string): any;

  getDomains(): any;

  addAction(intent: string, action: string, parameters: any[], fn: Function): any;

  registerActionFunction(action: string, fn: Function): any;

  getActions(intent: string): any[];

  removeAction(intent: string, action: string, parameters: any[]): any;

  removeActions(intent: string): any;

  removeActionFunction(action: string): any;

  addAnswer(locale: string, intent: string, answer: string, opts: any): any;

  removeAnswer(locale: string, intent: string, answer: string, opts: any): any;

  findAllAnswers(locale: string, intent: string): any[];

  addCorpora(names: string | string[]): Promise<void>;

  addImported(input: any): Promise<void>;

  addEntities(entities: any, locale?: string): void;

  addData(data: any[], locale: string, domain?: any): void;

  addCorpus(fileName: string | any): Promise<void>;

  getSentiment(locale: string | object, utterance?: string): any;

  describeLanguage(locale: string, name: string): void;

  train(): Promise<any>;

  classify(locale: string, utterance: string, settings?: any): Promise<any>;

  extractEntities(locale: string | object, utterance?: string, context?: any, settings?: any): Promise<any>;

  organizeEntities(entities: any[]): any[];

  structureEntities(output: any): any;

  process(locale: string | object, utterance?: string, srcContext?: any, settings?: any): Promise<any>;

  toJSON(): any;

  fromJSON(json: any): void;

  export(minified?: boolean): string;

  import(data: string | any): void;

  save(srcFileName?: string, minified?: boolean): Promise<void>;

  load(srcFileName?: string): Promise<boolean>;
}

export interface NlpSettings {
  tag: string;
  autoLoad: boolean;
  autoSave: boolean;
  modelFileName: string;
  executeActionsBeforeAnswers: boolean;
  nlu: any;
  ner: any;
  nlg: any;
  action: any;
  sentiment: any;
  slot: any;
  context: any;
  forceNER: boolean;
  languages: string[];
  locales: string[];
  calculateSentiment: boolean;
  corpora: string | string[];
}

export class ContextManager extends Clonable {
  onGetInputContextId: (input: any) => Promise<string | undefined>
  onCtxUpdate: (context: any) => Promise<void>
  defaultData: { [key: string]: any }

  constructor(settings?: Partial<ContextManagerSettings>, container?: Container);

  registerDefault(): void;

  getInputContextId(input: any): Promise<string | undefined>;

  getContext(input: any): Promise<any>;

  setContext(input: any, context: any): Promise<void>;

  resetConversations(): Promise<void>;

  resetConversation(cid: string): Promise<void>;
}

export interface ContextManagerSettings {
  tag: string;
  tableName: string;
}
