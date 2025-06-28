declare module 'node-nlp' {
  // Interfaces from the original file
  interface Explanation {
    token: string;
    stem: string;
    weight: number;
  }

  interface Classification {
    intent: string;
    score: number;
  }

  interface Answer {
    answer: string;
  }

  interface Sentiment {
    score: number;
    numWords: number;
    numHits: number;
    average: number;
    type: string;
    locale: string;
    vote: string;
  }

  interface NluAnswer {
    classifications: Classification[];
  }

  interface NlpResult {
    locale: string;
    utterance: string;
    languageGuessed: boolean;
    localeIso2: string;
    language: string;
    explanation: Explanation[];
    classifications: Classification[];
    intent: string;
    score: number;
    domain: string;
    entities: any[];
    sourceEntities: any[];
    answers: Answer[];
    answer: string;
    actions: any[];
    sentiment: Sentiment;
    nluAnswer?: NluAnswer;
  }

  interface NlpManagerOptions {
    languages: string[];
    nlu?: any;
    ner?: any;
    sentiment?: any;
    autoLoad?: boolean;
    autoSave?: boolean;
    container?: any;
    forceNER?: boolean;
  }

  // Language
  class Language {
    constructor(settings?: any);
    guess(text: string, whitelist?: string[]): { language: string, alpha2: string, alpha3: string, score: number };
    guessBest(text: string, whitelist?: string[]): { language: string, alpha2: string, alpha3: string, score: number };
  }

  // NLP
  class NlpUtil {
    static getStemmer(locale: string): any;
    static getTokenizer(locale: string): any;
    static getStopwords(locale: string): string[];
    static addStopwords(locale: string, words: string[]): void;
    static removeStopwords(locale: string, words: string[]): void;
  }

  class NlpManager {
    constructor(options?: NlpManagerOptions);
    addDocument(locale: string, utterance: string, intent: string): void;
    addAnswer(locale: string, intent: string, answer: string): void;
    process(locale: string, utterance: string): Promise<NlpResult>;
    train(): Promise<void>;
    save(filename: string): Promise<void>;
    load(filename: string): Promise<void>;
  }

  class NlpExcelReader {
    constructor(manager: NlpManager);
    load(filename: string): Promise<void>;
  }

  // XTables
  class XTableUtils {
    static generateId(): string;
    static generateUuid(): string;
  }

  class XTable {
    constructor(name: string, settings?: any);
    addRow(row: any): void;
    getRow(id: string): any;
    removeRow(id: string): void;
    findOne(condition: any): any;
    find(condition: any): any[];
  }

  class XDoc {
    constructor(settings?: any);
    addTable(name: string, settings?: any): XTable;
    getTable(name: string): XTable;
    removeTable(name: string): void;
    save(filename: string): Promise<void>;
    load(filename: string): Promise<void>;
  }

  // Util
  function removeEmojis(text: string): string;

  class Evaluator {
    constructor(settings?: any);
    evaluate(text: string, context?: any): any;
  }

  class SpellCheck {
    constructor(settings?: any);
    check(text: string): string;
  }

  class Handlebars {
    static compile(template: string): (context: any) => string;
    static registerHelper(name: string, fn: Function): void;
  }

  // NLG
  class ActionManager {
    constructor(settings?: any);
    addAction(name: string, fn: Function): void;
    findAction(name: string): Function;
    runActions(actions: string[], input: any): Promise<any>;
  }

  class NlgManager {
    constructor(settings?: any);
    addAnswer(locale: string, intent: string, answer: string): void;
    findAnswer(locale: string, intent: string): string;
    findAllAnswers(locale: string, intent: string): string[];
    save(filename: string): Promise<void>;
    load(filename: string): Promise<void>;
  }

  // Classifiers
  class NeuralNetwork {
    constructor(settings?: any);
    train(data: any[]): void;
    run(input: any): any;
    save(): any;
    load(data: any): void;
  }

  // Sentiment
  class SentimentAnalyzer {
    constructor(settings?: any);
    getSentiment(text: string, locale?: string): Sentiment;
  }

  class SentimentManager {
    constructor(settings?: any);
    addLanguage(locale: string): void;
    process(text: string, locale?: string): Sentiment;
    save(filename: string): Promise<void>;
    load(filename: string): Promise<void>;
  }

  // Recognizer
  class Recognizer {
    constructor(settings?: any);
    recognize(utterance: string, context?: any): Promise<any>;
  }

  class ConversationContext {
    constructor(settings?: any);
    getConversationContext(id: string): any;
    setConversationContext(id: string, context: any): void;
  }

  class MemoryConversationContext extends ConversationContext {
    constructor(settings?: any);
  }

  // NLU
  class BrainNLU {
    constructor(settings?: any);
    add(utterance: string, intent: string): void;
    train(): Promise<void>;
    getClassifications(utterance: string): Promise<Classification[]>;
    save(filename: string): Promise<void>;
    load(filename: string): Promise<void>;
  }

  // Export all
  export {
    Language,
    NlpUtil,
    NlpManager,
    NlpExcelReader,
    XTableUtils,
    XTable,
    XDoc,
    removeEmojis,
    Evaluator,
    SpellCheck,
    Handlebars,
    ActionManager,
    NlgManager,
    NeuralNetwork,
    SentimentAnalyzer,
    SentimentManager,
    Recognizer,
    ConversationContext,
    MemoryConversationContext,
    BrainNLU
  };
}
