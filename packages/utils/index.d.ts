import { Normalizer, Tokenizer } from '@nlpjs/core'

export class NGrams {
  constructor(settings?: {
    normalizer?: Normalizer;
    tokenizer?: Tokenizer;
    byChar?: boolean;
    byWord?: boolean;
    startToken?: string;
    endToken?: string;
  });

  split(text: string): string[];

  getNGrams(text: string | string[], n?: number): string[];

  getFreqs(ngrams: string[], weighted?: boolean | number): { [key: string]: number };

  getNGramsFreqs(text: string | string[], n?: number, weighted?: boolean | number): { [key: string]: number };
}

export class TfIdf {
  constructor(settings?: {
    tokenizer?: Tokenizer;
    normalizer?: Normalizer;
  });

  static tf(term: string, document: { [word: string]: number }): number;

  clearCache(): void;

  getTokens(text: string | string[]): string[];

  buildDocument(text: string): { [word: string]: number };

  addDocument(key: string, document: string): void;

  docsWithTerm(term: string): number;

  idf(term: string): number;

  tfidf(terms: string | string[], key: string): number;

  tfidfs(terms: string | string[]): { [key: string]: number };

  classify(terms: string | string[]): { document: string; score: number }[];
}

export class MarkovChain {
  constructor(settings?: {
    normalizer?: Normalizer;
    tokenizer?: Tokenizer;
    byWord?: boolean;
    startToken?: string;
    endToken?: string;
    text?: string;
  });

  buildTree(grams: string[][]): any;

  setSeed(text: string): void;

  getChildsFromTree(inputTokens: string[], tree: any, l: number): any;

  getChilds(tokens: string[], avoidLongs?: boolean): any[];

  getSortedChilds(tokens: string[], avoidLongs?: boolean): any[];

  predictNext(text: string, amount?: number): string[];

  pickByWeight(obj: { [key: string]: number }): string | undefined;

  predictNextRandom(text: string | string[]): string | undefined;

  randomSentence(startText?: string, maxLength?: number): string;
}

export class NlpAnalyzer {
  constructor(settings?: { threshold?: number });

  analyze(corpus: any, trainFn: Function, testFn: Function): Promise<any>;

  writeAt(sheet: any, column: number, row: number, value: any): void;

  generateConfusionMatrix(workbook: any, analysis: any): void;

  generateData(workbook: any, analysis: any): void;

  generateExcel(fileName: string, analysis: any, options?: any): Promise<void>;

  streamExcel(outStream: any, analysis: any, options?: any): Promise<void>;
}

export function cartesian<T>(arr: T[][]): T[][];

export function splitPattern(str: string): string[][];

export function composeFromPattern(str: string): string[];

export function composeCorpus(corpus: any): any;

export declare class ProgressBar {
  constructor(fmt?: string, options?: number | { total?: number; stream?: NodeJS.WriteStream; width?: number });

  tick(len: number): void;

  generateStr(eta: number, ratio: number): string;

  reline(str: string): void;

  render(): void;
}

export function softMax(values: number[]): number[];

export declare class Downloader {
  constructor(settings?: {
    dir?: string;
    replicateAllFolders?: boolean;
    replaceIfExists?: boolean;
    showProgress?: boolean;
    automaticUntar?: boolean;
    proxy?: string;
  });

  static ensureDir(dirPath: string, recursive?: boolean): void;

  download(urlPath: string, filePath?: string): Promise<any>;
}

export function getAbsolutePath(pathToCheck: string, rootDir?: string): string;

export class Lookup {
  constructor(data?: any[], propName?: string);

  add(key: string): void;

  buildFromData(data: any[], propName: string): void;

  prepare(item: any): { keys: string[]; data: { [key: string]: any } };

  toVector(item: any): Float32Array;

  toObj(item: any): { [key: string]: any };

  vectorToObj(item: any): { [key: string]: any };
}

export class CorpusLookup {
  constructor(corpus?: any, stemmer?: any, generateVectors?: boolean);

  buildLookups(): void;

  toVector(item: any): { input: Float32Array; output: Float32Array };

  buildVectors(): void;

  buildObjects(): void;

  arrToObj(arr: any[]): { [key: string]: number };

  prepareInput(input: any): { [key: string]: number };

  inputToVector(input: any): Float32Array;

  inputToObj(input: any): { keys: string[]; data: { [key: string]: any } };

  objToClassifications(obj: { [key: string]: number }): { intent: string; score: number }[];

  vectorToClassifications(vector: Float32Array): { intent: string; score: number }[];

  build(corpus: any, stemmer: any, generateVectors: boolean): void;
}

export class Bench {
  constructor(settings?: { duration?: number; transactionsPerRun?: number });

  add(name: string, fn: Function, initfn?: Function): void;

  getElapsed(hrstart: [number, number]): number;

  measure(algorithm: any): Promise<any>;

  run(): Promise<any[]>;
}

export function gibberishScore(text: string): number;

export function isGibberish(text: string): boolean;
