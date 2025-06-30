import { Container, Stemmer, Tokenizer } from '@nlpjs/core'
import { Evaluator as EvaluatorClass } from '@nlpjs/evaluator'
import { Language as NlpLanguage } from '@nlpjs/language'
import { NerSettings } from '@nlpjs/ner'
import { Action, ActionManager, Answer, NlgManager as NlgManagerBase, NlgSettings } from '@nlpjs/nlg'
import {
  Classification,
  Corpus,
  CorpusDataEntry,
  CorpusDomain,
  CorpusEntities,
  Entity,
  Explanation,
  ImportedCorpusInput,
  Nlp as NlpBase,
  NlpJson,
  NlpResult,
  NlpSettings as NlpBaseSettings,
  type Sentiment,
} from '@nlpjs/nlp'
import { NluNeural, NluSettings as NluBaseSettings, TrainResult } from '@nlpjs/nlu'
import { QnaImporter } from '@nlpjs/qna-importer'
import {
  SentimentAnalyzer as SentimentAnalyzerBase,
  SentimentAnalyzerSettings,
  SentimentResult,
} from '@nlpjs/sentiment'
import { SpellCheck as SpellCheckBase, SpellCheckSettings } from '@nlpjs/similarity'
import { XDoc as XDocClass, XTable as XTableClass, XTableUtils as XTableUtilsClass } from '@nlpjs/xtables'

export { NeuralNetwork } from '@nlpjs/neural'

// Context Interfaces
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

// Settings Interfaces
export interface NlpManagerSettings extends NlpBaseSettings {
  ner?: NerSettings;
  autoLoad?: boolean;
  autoSave?: boolean;
  container?: Container;
  forceNER?: boolean;
  processTransformer?: (result: NlpResult) => NlpResult;
}

export interface RecognizerSettings {
  nlpManager?: NlpManager;
  container?: Container;
  nerThreshold?: number;
  threshold?: number;
  conversationContext?: ConversationContext;
}

export interface BrainNLUSettings extends NluBaseSettings {
  container?: Container;
  language?: string;
}

// Class Definitions
export class Language extends NlpLanguage {
}

export class NlpUtil {
  static useAutoStemmer: boolean
  static autoStemmers: { [key: string]: any }
  static useAlternative: { [key: string]: any }
  static useNoneFeature: { [key: string]: any }
  static tokenizers: { [key: string]: Tokenizer }

  static getTruncatedLocale(locale: string): string;

  static getStemmer(locale: string): Stemmer;

  static getTokenizer(locale: string): Tokenizer;

  static getCulture(locale: string): string;
}

export class NlpManager {
  public readonly nlp: NlpBase
  public readonly settings: NlpManagerSettings
  public readonly container: Container
  public readonly sentimentManager: SentimentManager
  public onIntent?: (nlp: NlpManager, result: NlpResult) => Promise<void>

  constructor(settings?: NlpManagerSettings);

  addDocument(locale: string, utterance: string, intent: string): void;

  removeDocument(locale: string, utterance: string, intent: string): void;

  addLanguage(locale: string | string[]): void;

  removeLanguage(locale: string | string[]): void;

  assignDomain(locale: string, intent: string, domain: string): void;

  getIntentDomain(locale: string, intent: string): string;

  getDomains(): string[];

  addAction(intent: string, action: string, parameters?: any[], fn?: Function): void;

  registerActionFunction(action: string, fn: Function): void;

  getActions(intent: string): Action[];

  removeAction(intent: string, action: string, parameters?: any[]): void;

  removeActions(intent: string): void;

  removeActionFunction(action: string): void;

  addAnswer(locale: string, intent: string, answer: string, opts?: any): void;

  removeAnswer(locale: string, intent: string, answer: string, opts?: any): void;

  findAllAnswers(locale: string, intent: string): Answer[];

  getSentiment(locale: string | { utterance: string, locale: string }, utterance?: string): Sentiment | {
    sentiment: SentimentResult
  };

  addNamedEntityText(
    entityName: string,
    optionName: string,
    languages: string[] | string,
    texts: string[] | string,
  ): void;

  removeNamedEntityText(
    entityName: string,
    optionName: string,
    languages: string[] | string,
    texts: string[] | string,
  ): void;

  addRegexEntity(entityName: string, languages: string[] | string, regex: string | RegExp): void;

  addBetweenCondition(locale: string, name: string, left: any, right: any, opts?: any): void;

  addPositionCondition(locale: string, name: string, position: any, words: any, opts?: any): void;

  addAfterCondition(locale: string, name: string, words: any, opts?: any): void;

  addAfterFirstCondition(locale: string, name: string, words: any, opts?: any): void;

  addAfterLastCondition(locale: string, name: string, words: any, opts?: any): void;

  addBeforeCondition(locale: string, name: string, words: any, opts?: any): void;

  addBeforeFirstCondition(locale: string, name: string, words: any, opts?: any): void;

  addBeforeLastCondition(locale: string, name: string, words: any, opts?: any): void;

  describeLanguage(locale: string, name: string): void;

  beginEdit(): void;

  train(): Promise<void>;

  classify(locale: string, utterance: string, settings?: any): Promise<NlpResult>;

  process(locale?: string | {
    utterance: string,
    locale: string,
    activity?: any,
    channel?: string,
    app?: string,
    from?: any
  }, utterance?: string, context?: Context, settings?: any): Promise<NlpResult>;

  extractEntities(
    locale: string | { utterance: string, locale: string },
    utterance?: string,
    context?: any,
    settings?: any,
  ): Promise<NlpResult>;

  toObj(): NlpJson;

  fromObj(obj: NlpJson): void;

  export(minified?: boolean): string;

  import(data: string | NlpJson): void;

  save(srcFileName?: string, minified?: boolean): Promise<void>;

  load(srcFileName?: string): Promise<boolean>;

  loadExcel(fileName?: string): void;

  testCorpus(corpus: Corpus): Promise<{ total: number; good: number; bad: number }>;

  addCorpus(corpus: string | Corpus | ImportedCorpusInput): Promise<void>;

  addCorpora(corpora: (string | Corpus | ImportedCorpusInput)[]): Promise<void>;

  trainAndEvaluate(fileName: string | Corpus): Promise<{ total: number; good: number; bad: number }>;
}

export class NlpExcelReader extends QnaImporter {
  constructor(manager: NlpManager);

  load(filename: string): void;
}

export class XTableUtils extends XTableUtilsClass {
}

export interface TableRow {
  [key: string]: any;
}

export class XTable extends XTableClass {
  constructor(name: string, settings?: any);

  addRow(row: TableRow): void;

  getRow(id: string): TableRow;

  removeRow(id: string): void;

  findOne(condition: any): TableRow;

  find(condition: any): TableRow[];
}

export class XDoc extends XDocClass {
  constructor(settings?: any);

  addTable(name: string, settings?: any): XTable;

  getTable(name: string): XTable;

  removeTable(name: string): void;

  save(filename: string): Promise<void>;

  load(filename: string): Promise<void>;
}

export { removeEmojis } from '@nlpjs/emoji'

export class Evaluator extends EvaluatorClass {
  constructor(settings?: any);
}

export class SpellCheck extends SpellCheckBase {
  constructor(settings?: SpellCheckSettings | { [key: string]: number });
}

declare class Handlebars {
  static compile(template: string): (context: any) => string;
}

export { Handlebars }

export { ActionManager }

export class NlgManager extends NlgManagerBase {
  constructor(settings?: NlgSettings, container?: Container);

  addAnswer(locale: string, intent: string, answer: string, opts?: any): void;

  findAnswer(locale: string, intent: string, context?: any, settings?: any): Promise<{ response: string } | undefined>;

  isValid(condition: string, context: any): boolean;
}

export class SentimentAnalyzer extends SentimentAnalyzerBase {
  constructor(settings?: SentimentAnalyzerSettings, container?: Container);

  getSentiment(utterance: string, locale?: string, settings?: any): Promise<SentimentResult>;
}

export class SentimentManager {
  public settings: any
  public languages: { [key: string]: any }
  public analyzer: SentimentAnalyzer

  constructor(settings?: any);

  addLanguage(locale: string): void;

  process(locale: string, phrase: string): Promise<Sentiment>;

  translate(sentiment: SentimentResult): Sentiment;
}

export class Recognizer {
  public settings: RecognizerSettings
  public nlpManager: NlpManager
  public threshold: number
  public conversationContext: ConversationContext

  constructor(settings?: RecognizerSettings);

  train(): Promise<void>;

  load(filename: string): void;

  save(filename: string): void;

  loadExcel(filename: string): Promise<void>;

  process(srcContext: any, locale: string, utterance: string): Promise<NlpResult>;

  recognize(session: any, cb?: (err: Error | null, result: NlpResult) => void): Promise<NlpResult> | undefined;

  recognizeUtterance(utterance: string, model: any, cb: (err: Error | null, result: NlpResult) => void): Promise<void>;

  recognizeTwice(session: any, cb: (err: Error | null, result: NlpResult) => void): void;

  setBot(bot: any, activateRouting?: boolean, routingThreshold?: number): void;
}

export abstract class ConversationContext {
  public settings: any

  protected constructor(settings?: any);

  getConversationId(session: any): string | undefined;

  abstract getConversationContext(session: any): Promise<any>;

  abstract setConversationContext(session: any, context: any): Promise<void>;
}

export class MemoryConversationContext extends ConversationContext {
  public conversationContexts: { [key: string]: any }

  constructor(settings?: any);

  getConversationContext(session: any): Promise<any>;

  setConversationContext(session: any, context: any): Promise<void>;
}

export class BrainNLU {
  public settings: BrainNLUSettings
  public container: Container
  public nlu: NluNeural
  public corpus: { utterance: string, intent: string }[]

  constructor(settings?: BrainNLUSettings);

  add(utterance: string, intent: string): void;

  train(): Promise<TrainResult>;

  getClassifications(utterance: string): Promise<Classification[]>;

  getBestClassification(utterance: string): Promise<Classification>;
}

// Export types
export type {
  Explanation,
  Classification,
  Answer,
  Entity,
  NlpResult,
  Corpus,
  CorpusDataEntry,
  CorpusDomain,
  CorpusEntities,
  ImportedCorpusInput,
  NlpJson,
}
