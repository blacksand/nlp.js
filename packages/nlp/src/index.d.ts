import { Clonable, Container } from '@nlpjs/core'
import { Ner, NerSettings } from '@nlpjs/ner'
import { Action, ActionManager, ActionManagerSettings, Answer, NlgManager, NlgSettings } from '@nlpjs/nlg'
import { NluManager, NluManagerSettings, TrainResult } from '@nlpjs/nlu'
import { SentimentAnalyzer, SentimentAnalyzerSettings, SentimentResult } from '@nlpjs/sentiment'
import { SlotManager, SlotManagerSettings } from '@nlpjs/slot'
import { ContextManager, ContextManagerSettings } from './context-manager'

export { ContextManager, ContextManagerSettings }

export interface Explanation {
  token: string;
  stem: string;
  weight: number;
}

export interface Entity {
  start: number;
  end: number;
  len: number;
  accuracy: number;
  sourceText: string;
  utteranceText: string;
  entity: string;
  resolution: any; // Can be refined further based on entity types
  alias?: string;
  isList?: boolean;
  items?: Entity[];
}

export interface DialogStackItem {
  dialog: string;
  lastExecuted?: number;
}

export interface ValidationContext {
  currentRetry?: number;
  retries?: number;
  failDialog?: string;
}

export interface Context {
  conversationId?: string;
  channel?: string;
  app?: string;
  from?: any; // Still generic, depends on connector activity
  dialogStack?: DialogStackItem[];
  validation?: ValidationContext;
  isWaitingInput?: boolean;
  variableName?: string;
  validatorParameters?: any;
  slotFill?: any; // Can be refined if we know the structure
  entities?: { [key: string]: Entity };

  [key: string]: any; // For dynamic properties like entity aliases
}

export interface Sentiment extends SentimentResult {
  vote: string;
}

export interface Classification {
  intent: string;
  score: number;
}

export interface NluAnswer {
  classifications: Classification[];
}

export interface NlpResult {
  locale: string;
  utterance: string;
  languageGuessed?: boolean;
  localeIso2?: string;
  language?: string;
  explanation?: Explanation[];
  classifications: Classification[];
  intent: string;
  score: number;
  domain?: string;
  entities: Entity[];
  sourceEntities: Entity[];
  answers?: Answer[];
  answer?: string;
  actions?: Action[];
  sentiment?: Sentiment;
  nluAnswer?: NluAnswer;
  context: Context;
  settings?: NlpSettings;
  optionalUtterance?: string;
  isOpenQuestionAnswer?: boolean;
  openQuestionFirstCharacter?: number;
  openQuestionScore?: number;
  srcAnswer?: string;
}

export interface NlpSettings {
  tag?: string;
  threshold?: number;
  autoLoad?: boolean;
  autoSave?: boolean;
  modelFileName?: string;
  executeActionsBeforeAnswers?: boolean;
  nlu?: NluManagerSettings;
  ner?: NerSettings;
  nlg?: NlgSettings;
  action?: ActionManagerSettings;
  sentiment?: SentimentAnalyzerSettings;
  slot?: SlotManagerSettings;
  context?: ContextManagerSettings;
  forceNER?: boolean;
  languages?: string[];
  locales?: string[];
  calculateSentiment?: boolean;
  corpora?: string | string[];
  container?: Container;
}

export interface CorpusAnswer {
  answer: string;
  opts?: any;
}

export interface CorpusSlotFilling {
  question: string;
  mandatory?: boolean;
}

export interface CorpusAction {
  name: string;
  parameters?: any[];
}

export interface CorpusDataEntry {
  intent: string;
  utterances: string[];
  answers?: (string | CorpusAnswer)[];
  slotFilling?: { [entityName: string]: string | CorpusSlotFilling };
  actions?: (string | CorpusAction)[];
}

export interface CorpusEntityOption {
  [optionName: string]: string | string[];
}

export interface CorpusEntityTrim {
  position: 'after' | 'afterLast' | 'afterFirst' | 'before' | 'beforeFirst' | 'beforeLast' | 'between' | 'betweenLast';
  words?: string[];
  leftWords?: string[];
  rightWords?: string[];
  opts?: any;
}

export interface CorpusEntity {
  locale?: string | string[];
  options?: CorpusEntityOption;
  regex?: string | string[] | RegExp | RegExp[];
  trim?: CorpusEntityTrim[];
}

export interface CorpusEntities {
  [entityName: string]: CorpusEntity;
}

export interface CorpusDomain {
  name: string;
  locale: string;
  data: CorpusDataEntry[];
  entities?: CorpusEntities;
}

export interface Corpus {
  name?: string;
  locale?: string;
  data?: CorpusDataEntry[];
  entities?: CorpusEntities;
  domains?: CorpusDomain[];
  contextData?: string | { [key: string]: any };
}

export interface ImportedCorpusInput {
  content?: string;
  filename?: string;
  importer: string;
}

export interface NlpJson {
  settings: NlpSettings;
  nluManager: any; // NluManager.toJSON() result
  ner: any; // Ner.toJSON() result
  nlgManager: any; // NlgManager.toJSON() result
  actionManager: any; // ActionManager.toJSON() result
  slotManager: any; // SlotManager.save() result
}

export class Nlp extends Clonable {
  public settings: NlpSettings
  public nluManager: NluManager
  public ner: Ner
  public nlgManager: NlgManager
  public actionManager: ActionManager
  public sentiment: SentimentAnalyzer
  public slotManager: SlotManager
  public contextManager: ContextManager
  public forceNER: boolean
  public onIntent?: (nlp: Nlp, result: NlpResult) => Promise<void>

  constructor(settings?: Partial<NlpSettings>, container?: Container);

  registerDefault(): void;

  initialize(): void;

  start(): Promise<void>;

  loadOrTrain(): Promise<void>;

  useNlu(clazz: any, locale: string | string[], domain: string, settings: any): void;

  guessLanguage(input: string | { utterance: string }): string;

  addLanguage(locales: string | string[]): void;

  removeLanguage(locales: string | string[]): void;

  addAdditionalEnumEntityUtterances(): void;

  replaceEnumEntitiesInSentence(
    manager: any, // Should be DomainManager from @nlpjs/nlu
    locale: string,
    domain: string,
    utterance: string,
    intent: string,
    entityList: string[],
    replaceTexts: { [key: string]: string[] },
  ): void;

  addDocument(locale: string, utterance: string, intent: string): void;

  removeDocument(locale: string, utterance: string, intent: string): void;

  getRulesByName(locale: string, name: string): any; // Return type can be refined
  addNerRule(locale: string, name: string, type: string, rule: any): Ner;

  removeNerRule(locale: string, name: string, rule: any): void;

  addNerRuleOptionTexts(locale: string, name: string, option: any, texts: any): Ner;

  removeNerRuleOptionTexts(locale: string, name: string, option: any, texts: any): void;

  addNerRegexRule(locale: string, name: string, regex: string | RegExp): Ner;

  addNerBetweenCondition(locale: string, name: string, left: any, right: any, opts: any): Ner;

  addNerBetweenLastCondition(locale: string, name: string, left: any, right: any, opts: any): Ner;

  addNerPositionCondition(locale: string, name: string, position: any, words: any, opts: any): Ner;

  addNerAfterCondition(locale: string, name: string, words: any, opts: any): Ner;

  addNerAfterFirstCondition(locale: string, name: string, words: any, opts: any): Ner;

  addNerAfterLastCondition(locale: string, name: string, words: any, opts: any): Ner;

  addNerBeforeCondition(locale: string, name: string, words: any, opts: any): Ner;

  addNerBeforeFirstCondition(locale: string, name: string, words: any, opts: any): Ner;

  addNerBeforeLastCondition(locale: string, name: string, words: any, opts: any): Ner;

  assignDomain(locale: string, intent: string, domain: string): void;

  getIntentDomain(locale: string, intent: string): string;

  getDomains(): string[];

  addAction(intent: string, action: string, parameters: any[], fn?: Function): void;

  registerActionFunction(action: string, fn: Function): void;

  getActions(intent: string): Action[];

  removeAction(intent: string, action: string, parameters: any[]): void;

  removeActions(intent: string): void;

  removeActionFunction(action: string): void;

  addAnswer(locale: string, intent: string, answer: string, opts?: any): void;

  removeAnswer(locale: string, intent: string, answer: string, opts?: any): void;

  findAllAnswers(locale: string, intent: string): Answer[];

  addCorpora(names: string | string[] | Corpus[]): Promise<void>;

  addImported(input: ImportedCorpusInput): Promise<void>;

  addEntities(entities: CorpusEntities, locale?: string): void;

  addData(data: CorpusDataEntry[], locale: string, domain?: CorpusDomain): void;

  addCorpus(fileName: string | Corpus | ImportedCorpusInput): Promise<void>;

  getSentiment(locale: string | { utterance: string, locale: string }, utterance?: string): Sentiment | {
    sentiment: SentimentResult
  };

  describeLanguage(locale: string, name: string): void;

  train(): Promise<TrainResult>;

  classify(locale: string, utterance: string, settings?: any): Promise<NlpResult>;

  extractEntities(
    locale: string | { utterance: string, locale: string },
    utterance?: string,
    context?: any,
    settings?: any,
  ): Promise<NlpResult>;

  organizeEntities(entities: Entity[]): Entity[];

  structureEntities(output: NlpResult): NlpResult;

  process(locale: string | {
    utterance: string,
    locale: string,
    activity?: any,
    channel?: string,
    app?: string,
    from?: any
  }, utterance?: string, srcContext?: Context, settings?: any): Promise<NlpResult>;

  toJSON(): NlpJson;

  fromJSON(json: NlpJson): void;

  export(minified?: boolean): string;

  import(data: string | NlpJson): void;

  save(srcFileName?: string, minified?: boolean): Promise<void>;

  load(srcFileName?: string): Promise<boolean>;
}
