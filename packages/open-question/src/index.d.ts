import { Worker } from 'worker_threads'

export interface BertTokenizerSettings {
  filesDir?: string;
  lowercase?: boolean;
  vocabFile?: string;
  vocabContent?: string;
  clsToken?: string;
  maskToken?: string;
  padToken?: string;
  sepToken?: string;
  unkToken?: string;
}

export class BertTokenizer {
  constructor(settings: BertTokenizerSettings);

  static getLowerCase(name: string): boolean | undefined;

  getQuestionLength(encoding: any): number;

  getContextStartIndex(encoding: any): number;

  getContextEndIndex(encoding: any): number;

  encode(sequence: string, pair: string): any; // Return type can be refined
  encodeSliced(sequence: string, pair: string): any; // Return type can be refined
  setPadding(length: number): void;

  setTruncation(length: number, stride: number): void;
}

export interface ModelDownloaderSettings {
  baseUrl?: string;
  dir?: string;
  proxy?: string;
}

export class ModelDownloader {
  constructor(settings?: ModelDownloaderSettings);

  download(name: string): Promise<string>;
}

export interface ModelSettings {
  name: string;
  dir?: string;
  proxy?: string;
}

export class Model {
  constructor(name: string, dir?: string, proxy?: string);

  start(): Promise<void>;

  runInference(encodings: any[]): Promise<[number[], number[]]>;

  stop(): void;
}

export interface QAClientSettings {
  modelName?: string;
  modelDir?: string;
  proxy?: string;
  tokenizer?: BertTokenizer;
  cased?: boolean;
}

export interface AnswerResult {
  text: string;
  score: number;
}

export class QAClient {
  constructor(settings?: QAClientSettings);

  start(srcSettings?: QAClientSettings): Promise<void>;

  getFeatures(question: string, context: string, stride?: number): any[]; // Return type can be refined
  predict(question: string, context: string, maxAnswerLength?: number): Promise<AnswerResult | undefined>;

  stop(): void;
}

export interface RuntimeSettings {
  inputs: string[];
  path: string;
}

export class Runtime {
  constructor(settings: RuntimeSettings);

  runInference(ids: number[][], attentionMask: number[][], tokenTypeIds: number[][]): Promise<[number[], number[]]>;

  start(): Promise<void>;

  stop(): void;
}

export class RuntimeWorker extends Worker {
  constructor();

  loadModel(params: any): Promise<void>; // Params can be refined
  close(): void;

  queueInference(
    modelPath: string,
    ids: number[][],
    attentionMask: number[][],
    tokenTypeIds: number[][],
  ): Promise<[number[], number[]]>;
}
