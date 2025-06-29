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

declare class Among {
  s_size: number
  s: string
  substring_i: number
  result: any
  method: any
  instance: any

  constructor(s: string, sub: number, result: any, method: any, instance: any);
}

declare class ArrToObj {
  static arrToObj(arr: any[], key?: string): Record<string, any>;
}

declare class BaseStemmer {
  current: string
  cursor: number
  limit: number
  limit_backward: number
  bra: number
  ket: number

  setCurrent(word: string): void;

  getCurrent(): string;

  // stem(): boolean;
}

declare function containerBootstrap(container: Container): void;

declare class Clonable {
  constructor(settings?: Record<string, any>);

  applySettings(settings?: Record<string, any>): void;

  toJSON(): Record<string, any>;

  fromJSON(json: Record<string, any>): void;
}

declare class Container {
  constructor(settings?: Record<string, any>);

  register(name: string, item: any, force?: boolean): void;

  get(name: string): any;

  use(plugin: any): void;
}

declare const defaultContainer: Container

declare function hasUnicode(str: string): boolean;

declare function unicodeToArray(str: string): string[];

declare function asciiToArray(str: string): string[];

declare function stringToArray(str: string): string[];

declare function compareWildcars(text: string, pattern: string): boolean;

declare function loadEnv(): void;

declare class Normalizer {
  constructor(settings?: Record<string, any>);

  normalize(text: string): string;

  remove(text: string, removeRegexps: RegExp[]): string;

  normalize(text: string): string;
}

declare class ObjToArr {
  static objToArr(obj: Record<string, any>, key?: string): any[];
}

declare class Stemmer extends BaseStemmer {
  constructor(tokenizer: any, stemDict?: Record<string, any>);

  stem(text: string, keepStops?: boolean): string[];
}

declare class Stopwords {
  constructor(tokenizer: any, words?: string[]);

  removeStopwords(tokens: string[]): string[];
}

declare class Tokenizer {
  constructor(settings?: Record<string, any>);

  tokenize(text: string, normalize?: boolean): string[];
}

declare class Timer {
  elapsed: number

  constructor(name?: string);

  start(): void;

  stop(): void;
}

declare class Logger {
  error(...args: any[]): void;

  warn(...args: any[]): void;

  info(...args: any[]): void;

  debug(...args: any[]): void;

  trace(...args: any[]): void;
}

declare class MemoryStorage {
  constructor(settings?: Record<string, any>);

  get(key: string): any;

  set(key: string, value: any): void;

  delete(key: string): void;

  keys(): string[];

  clear(): void;
}

declare function uuid(): string;

declare const dock: {
  start(settings: Record<string, any>, mustLoadEnv?: boolean): Promise<any>;
  [key: string]: any;
}

declare class Context {
  constructor(settings?: Record<string, any>);

  [key: string]: any;
}

declare function dockStart(settings: Record<string, any>, mustLoadEnv?: boolean): Promise<any>;

export {
  Among,
  ArrToObj,
  BaseStemmer,
  containerBootstrap,
  Clonable,
  Container,
  defaultContainer,
  hasUnicode,
  unicodeToArray,
  asciiToArray,
  stringToArray,
  compareWildcars,
  loadEnv,
  Normalizer,
  ObjToArr,
  Stemmer,
  Stopwords,
  Tokenizer,
  Timer,
  Logger,
  MemoryStorage,
  uuid,
  dock,
  Context,
  dockStart,
}
