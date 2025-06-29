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

export interface Explanation {
  token: string;
  stem: string;
  weight: number;
}

export interface Classification {
  intent: string;
  score: number;
}

export interface Answer {
  answer: string;
}

export interface Sentiment {
  score: number;
  numWords: number;
  numHits: number;
  average: number;
  type: string;
  locale: string;
  vote: string;
}

export interface NluAnswer {
  classifications: Classification[];
}

export interface NlpResult {
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

export interface NlpManagerOptions {
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
export class Language {
  constructor(settings?: any);
  guess(text: string, whitelist?: string[]): { language: string, alpha2: string, alpha3: string, score: number };
  guessBest(text: string, whitelist?: string[]): { language: string, alpha2: string, alpha3: string, score: number };
}

// NLP
export class NlpUtil {
  static getStemmer(locale: string): any;
  static getTokenizer(locale: string): any;
  static getStopwords(locale: string): string[];
  static addStopwords(locale: string, words: string[]): void;
  static removeStopwords(locale: string, words: string[]): void;
}

export class NlpManager {
  constructor(options?: NlpManagerOptions);
  addDocument(locale: string, utterance: string, intent: string): void;
  addAnswer(locale: string, intent: string, answer: string): void;
  process(locale: string, utterance: string): Promise<NlpResult>;
  train(): Promise<void>;
  save(filename: string): Promise<void>;
  load(filename: string): Promise<void>;
}

export class NlpExcelReader {
  constructor(manager: NlpManager);
  load(filename: string): Promise<void>;
}

// XTables
export class XTableUtils {
  static generateId(): string;
  static generateUuid(): string;
}

export class XTable {
  constructor(name: string, settings?: any);
  addRow(row: any): void;
  getRow(id: string): any;
  removeRow(id: string): void;
  findOne(condition: any): any;
  find(condition: any): any[];
}

export class XDoc {
  constructor(settings?: any);
  addTable(name: string, settings?: any): XTable;
  getTable(name: string): XTable;
  removeTable(name: string): void;
  save(filename: string): Promise<void>;
  load(filename: string): Promise<void>;
}

// Util
export function removeEmojis(text: string): string;

export class Evaluator {
  constructor(settings?: any);
  evaluate(text: string, context?: any): any;
}

export class SpellCheck {
  constructor(settings?: any);
  check(text: string): string;
}

export class Handlebars {
  static compile(template: string): (context: any) => string;
  static registerHelper(name: string, fn: Function): void;
}

// NLG
export class ActionManager {
  constructor(settings?: any);
  addAction(name: string, fn: Function): void;
  findAction(name: string): Function;
  runActions(actions: string[], input: any): Promise<any>;
}

export class NlgManager {
  constructor(settings?: any);
  addAnswer(locale: string, intent: string, answer: string): void;
  findAnswer(locale: string, intent: string): string;
  findAllAnswers(locale: string, intent: string): string[];
  save(filename: string): Promise<void>;
  load(filename: string): Promise<void>;
}

// Classifiers
export class NeuralNetwork {
  constructor(settings?: any);
  train(data: any[]): void;
  run(input: any): any;
  save(): any;
  load(data: any): void;
}

// Sentiment
export class SentimentAnalyzer {
  constructor(settings?: any);
  getSentiment(text: string, locale?: string): Sentiment;
}

export class SentimentManager {
  constructor(settings?: any);
  addLanguage(locale: string): void;
  process(text: string, locale?: string): Sentiment;
  save(filename: string): Promise<void>;
  load(filename: string): Promise<void>;
}

// Recognizer
export class Recognizer {
  constructor(settings?: any);
  recognize(utterance: string, context?: any): Promise<any>;
}

export class ConversationContext {
  constructor(settings?: any);
  getConversationContext(id: string): any;
  setConversationContext(id: string, context: any): void;
}

export class MemoryConversationContext extends ConversationContext {
  constructor(settings?: any);
}

// NLU
export class BrainNLU {
  constructor(settings?: any);
  add(utterance: string, intent: string): void;
  train(): Promise<void>;
  getClassifications(utterance: string): Promise<Classification[]>;
  save(filename: string): Promise<void>;
  load(filename: string): Promise<void>;
}
