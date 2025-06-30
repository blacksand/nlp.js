import { Clonable, Container } from '@nlpjs/core'
import { Language } from '@nlpjs/language-min'
import { NeuralNetwork } from '@nlpjs/neural'

export interface NluManagerSettings {
  tag?: string;
  locales?: string[];
  domain?: any; // Can be refined if we know the structure
  useNoneFeature?: boolean;
  trainByDomain?: boolean;
}

export interface Classification {
  intent: string;
  score: number;
}

export interface NluInput {
  utterance: string;
  locale?: string;
  settings?: NluSettings;
  languageGuessed?: boolean;
  localeIso2?: string;
  language?: string;
  classifications?: Classification[];
  domain?: string;
  intent?: string;
  score?: number;
  stems?: string[];
  tokens?: string[];
  nluAnswer?: any; // Can be refined if we know the structure
  text?: string;
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
  returnExplanation?: boolean;
}

export interface CorpusItem {
  utterance: string;
  intent: string;
  stems?: string[];
  tokens?: string[];
}

export interface TrainResult {
  status: any; // Can be refined further
}

export interface DomainManagerSettings {
  locale?: string;
  tag?: string;
  nluByDomain?: { [key: string]: { className: string; settings: any } };
  trainByDomain?: boolean;
  useStemDict?: boolean;
}

export interface StemDictEntry {
  intent: string;
  domain: string;
}

export class NluManager extends Clonable {
  public settings: NluManagerSettings
  public guesser: Language
  public locales: string[]
  public languageNames: { [locale: string]: { locale: string; name: string } }
  public domainManagers: { [locale: string]: DomainManager }
  public intentDomains: { [locale: string]: { [intent: string]: string } }

  constructor(settings?: Partial<NluManagerSettings>, container?: Container);

  registerDefault(): void;

  describeLanguage(locale: string, name: string): void;

  addLanguage(srcLocales: string | string[]): void;

  removeLanguage(locales: string | string[]): void;

  guessLanguage(srcInput: string | NluInput): string | NluInput;

  assignDomain(srcLocale: string, srcIntent: string, srcDomain?: string): void;

  getIntentDomain(srcLocale: string, intent: string): string;

  getDomains(): { [locale: string]: { [domain: string]: string[] } };

  consolidateLocale(srcLocale: string, utterance: string): string;

  consolidateManager(locale: string): DomainManager;

  add(srcLocale: string, utterance: string, intent: string): void;

  remove(srcLocale: string, utterance: string, intent: string): void;

  innerTrain(settings: { locales?: string | string[]; settings?: NluSettings }): Promise<TrainResult[]>;

  train(settings?: { locales?: string | string[]; settings?: NluSettings }): Promise<TrainResult[]>;

  fillLanguage(srcInput: NluInput): NluInput;

  classificationsIsNone(classifications: Classification[]): boolean;

  checkIfIsNone(srcInput: NluInput): NluInput;

  innerClassify(srcInput: NluInput): Promise<NluInput>;

  defaultPipelineProcess(input: NluInput): Promise<NluInput>;

  process(locale: string | NluInput, utterance?: string, domain?: string, settings?: NluSettings): Promise<NluInput>;

  toJSON(): {
    settings: NluManagerSettings;
    locales: string[];
    languageNames: { [locale: string]: { locale: string; name: string } };
    domainManagers: { [key: string]: any };
    intentDomains: { [locale: string]: { [intent: string]: string } };
    extraSentences: [string, string][]
  };

  fromJSON(json: {
    settings: NluManagerSettings;
    locales: string[];
    languageNames: { [locale: string]: { locale: string; name: string } };
    domainManagers: { [key: string]: any };
    intentDomains: { [locale: string]: { [intent: string]: string } };
    extraSentences: [string, string][]
  }): void;
}

export class Nlu extends Clonable {
  public settings: NluSettings
  public noneLanguage: any // Still generic, depends on implementation
  public spellCheck: SpellCheck
  public features: { [key: string]: number }
  public intents: { [key: string]: number }
  public intentFeatures: { [intent: string]: { [feature: string]: number } }
  public featuresToIntent: { [feature: string]: string[] }
  public numFeatures: number
  public numIntents: number
  public intentsArr: string[]

  constructor(settings?: Partial<NluSettings>, container?: Container);

  registerDefault(): void;

  defaultPipelinePrepare(input: NluInput): Promise<string[]>;

  defaultPipelineProcess(input: NluInput): Promise<NluInput>;

  prepare(
    text: string | NluInput | CorpusItem[],
    srcSettings?: NluSettings,
  ): Promise<string[] | NluInput | CorpusItem[]>;

  doSpellCheck(input: NluInput, srcSettings?: NluSettings): Promise<NluInput>;

  prepareCorpus(srcInput: { corpus: CorpusItem[]; settings?: NluSettings }): Promise<{
    corpus: { input: string[]; output: { [intent: string]: number } }[];
    settings?: NluSettings
  }>;

  addNoneFeature(srcInput: NluInput | { corpus: CorpusItem[]; settings?: NluSettings }): NluInput | {
    corpus: CorpusItem[];
    settings?: NluSettings
  };

  convertToArray(srcInput: NluInput): NluInput;

  someSimilar(tokensA: string[], tokensB: string[]): boolean;

  matchAllowList(intent: string, allowList: string[]): boolean;

  intentIsActivated(intent: string, tokens: string[], allowList: string[]): boolean;

  filterNonActivated(srcInput: NluInput): NluInput;

  normalizeClassifications(srcInput: NluInput): NluInput;

  textToFeatures(srcInput: NluInput | { corpus: CorpusItem[]; settings?: NluSettings }): NluInput | {
    corpus: CorpusItem[];
    settings?: NluSettings
  };

  innerTrain(srcInput: { corpus: CorpusItem[]; settings?: NluSettings }): Promise<TrainResult>;

  train(corpus: CorpusItem[], settings?: NluSettings): Promise<TrainResult>;

  getExplanation(input: NluInput, explanation: any): NluInput;

  process(utterance: string, settings?: NluSettings): Promise<NluInput>;

  toJSON(): {
    settings: NluSettings;
    features: { [key: string]: number };
    intents: { [key: string]: number };
    intentFeatures: { [intent: string]: { [feature: string]: number } };
    featuresToIntent: { [feature: string]: string[] }
  };

  fromJSON(json: {
    settings: NluSettings;
    features: { [key: string]: number };
    intents: { [key: string]: number };
    intentFeatures: { [intent: string]: { [feature: string]: number } };
    featuresToIntent: { [feature: string]: string[] }
  }): void;
}

export class NluNeural extends Nlu {
  public neuralNetwork: NeuralNetwork

  innerTrain(srcInput: { corpus: CorpusItem[]; settings?: NluSettings }): Promise<TrainResult>;

  innerProcess(srcInput: NluInput): NluInput;

  registerDefault(): void;

  toJSON(): {
    settings: NluSettings;
    features: { [key: string]: number };
    intents: { [key: string]: number };
    intentFeatures: { [intent: string]: { [feature: string]: number } };
    featuresToIntent: { [feature: string]: string[] };
    neuralNetwork: any
  };

  fromJSON(json: {
    settings: NluSettings;
    features: { [key: string]: number };
    intents: { [key: string]: number };
    intentFeatures: { [intent: string]: { [feature: string]: number } };
    featuresToIntent: { [feature: string]: string[] };
    neuralNetwork: any
  }): void;
}

export class DomainManager extends Clonable {
  public settings: DomainManagerSettings
  public domains: { [domainName: string]: Nlu }
  public stemDict: { [key: string]: StemDictEntry }
  public intentDict: { [intent: string]: string }
  public sentences: { domain: string; utterance: string; intent: string }[]

  constructor(settings?: Partial<DomainManagerSettings>, container?: Container);

  registerDefault(): void;

  getDomainInstance(domainName: string): Nlu;

  addDomain(name: string): Nlu;

  removeDomain(name: string): void;

  generateStemKey(srcTokens: string | string[]): Promise<string>;

  add(domain: string, utterance: string, intent: string): void;

  getSentences(): { domain: string; utterance: string; intent: string }[];

  remove(srcDomain: string, srcUtterance: string, srcIntent?: string): boolean;

  trainStemmer(srcInput: any): Promise<any>;

  innerGenerateCorpus(domainName?: string): { [domain: string]: CorpusItem[] };

  generateCorpus(srcInput: { corpus: CorpusItem[]; settings?: DomainManagerSettings }): Promise<{
    corpus: { [domain: string]: CorpusItem[] };
    settings?: DomainManagerSettings
  }>;

  prepare(srcInput: string | NluInput): Promise<string[] | NluInput>;

  fillStemDict(srcInput: any): Promise<any>;

  innerTrain(srcInput: { corpus: { [domain: string]: CorpusItem[] }; settings?: DomainManagerSettings }): Promise<any>;

  train(settings?: any): Promise<any>;

  matchAllowList(intent: string, allowList: string[]): boolean;

  classifyByStemDict(utterance: string, domainName?: string, allowList?: string[]): Promise<{
    domain: string;
    classifications: Classification[]
  } | undefined>;

  innerClassify(srcInput: NluInput, domainName?: string): Promise<NluInput>;

  defaultPipelineProcess(input: NluInput): Promise<Classification[]>;

  process(utterance: string | NluInput, settings?: NluSettings): Promise<Classification[]>;

  toJSON(): {
    settings: DomainManagerSettings;
    stemDict: { [key: string]: StemDictEntry };
    intentDict: { [intent: string]: string };
    sentences: { domain: string; utterance: string; intent: string }[];
    domains: { [key: string]: any }
  };

  fromJSON(json: {
    settings: DomainManagerSettings;
    stemDict: { [key: string]: StemDictEntry };
    intentDict: { [intent: string]: string };
    sentences: { domain: string; utterance: string; intent: string }[];
    domains: { [key: string]: any }
  }): void;
}
