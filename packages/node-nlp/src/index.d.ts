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
  languages?: string[];
  nlu?: any;
  ner?: any;
  sentiment?: any;
  autoLoad?: boolean;
  autoSave?: boolean;
  container?: any;
  forceNER?: boolean;
}

import { Evaluator as EvaluatorClass } from '@nlpjs/evaluator'
// Language
import { Language as NlpLanguage } from '@nlpjs/language'
// NLG
import { NlgManager as NlgManagerClass } from '@nlpjs/nlg'
// NLP
import { ContextManager, Nlp as NlpManagerClass } from '@nlpjs/nlp'
// NLU
import { NluManager as BrainNLUClass } from '@nlpjs/nlu'
import { QnaImporter } from '@nlpjs/qna-importer'
// Sentiment
import { SentimentAnalyzer as SentimentAnalyzerClass } from '@nlpjs/sentiment'
import { SpellCheck as SpellCheckClass } from '@nlpjs/similarity'
// XTables
import { XDoc as XDocClass, XTable as XTableClass, XTableUtils as XTableUtilsClass } from '@nlpjs/xtables'
// Classifiers
export { NeuralNetwork } from '@nlpjs/neural'

export class Language extends NlpLanguage {
}

export class NlpUtil {
  static getStemmer(locale: string): any

  static getTokenizer(locale: string): any

  static getStopwords(locale: string): string[]

  static addStopwords(locale: string, words: string[]): void

  static removeStopwords(locale: string, words: string[]): void
}

export class NlpManager extends NlpManagerClass {
  constructor(options?: NlpManagerOptions);

  addDocument(locale: string, utterance: string, intent: string): void;

  addAnswer(locale: string, intent: string, answer: string): void;

  process(locale: string, utterance: string): Promise<NlpResult>;

  train(): Promise<void>;

  save(filename: string): Promise<void>;

  load(filename: string): Promise<boolean>;
}

export class NlpExcelReader extends QnaImporter {
  constructor(manager: NlpManager);

  load(filename: string): Promise<void>;
}

export class XTableUtils extends XTableUtilsClass {
}

export class XTable extends XTableClass {
  constructor(name: string, settings?: any);

  addRow(row: any): void;

  getRow(id: string): any;

  removeRow(id: string): void;

  findOne(condition: any): any;

  find(condition: any): any[];
}

export class XDoc extends XDocClass {
  constructor(settings?: any);

  addTable(name: string, settings?: any): XTable;

  getTable(name: string): XTable;

  removeTable(name: string): void;

  save(filename: string): Promise<void>;

  load(filename: string): Promise<void>;
}

// Util
export { removeEmojis } from '@nlpjs/emoji'

export class Evaluator extends EvaluatorClass {
  constructor(settings?: any);
}

export class SpellCheck extends SpellCheckClass {
  constructor(settings?: any);
}

// Handlebars is not directly exported from any @nlpjs package, so we'll define a placeholder.
declare class Handlebars {
  static compile(template: string): (context: any) => string;

  static registerHelper(name: string, fn: Function): void;
}

export { Handlebars }

export { ActionManager } from '@nlpjs/nlg'

export class NlgManager extends NlgManagerClass {
  constructor(settings?: any);

  addAnswer(locale: string, intent: string, answer: string): void;

  findAnswer(locale: string, intent: string): string;

  // @ts-expect-error override
  findAllAnswers(locale: string, intent: string): string[];

  save(filename: string): Promise<void>;

  load(filename: string): Promise<void>;
}


export class SentimentAnalyzer extends SentimentAnalyzerClass {
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

export class Recognizer {
  constructor(settings?: any);

  recognize(utterance: string, context?: any): Promise<any>;
}

export class ConversationContext extends ContextManager {
  constructor(settings?: any);

  getConversationContext(id: string): any;

  setConversationContext(id: string, context: any): void;
}

export class MemoryConversationContext extends ConversationContext {
  constructor(settings?: any);
}

export class BrainNLU extends BrainNLUClass {
  constructor(settings?: any);

  add(utterance: string, intent: string): void;

  train(): Promise<void>;

  getClassifications(utterance: string): Promise<Classification[]>;

  save(filename: string): Promise<void>;

  load(filename: string): Promise<void>;
}
