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

import { Clonable, Container } from '@nlpjs/core'

export interface ContainerConfiguration {
  pathConfiguration?: string;
  pathPipeline?: string;
  pathPlugins?: string;
  isChild?: boolean;
  env?: Record<string, string>;
  envFileName?: string;
  loadEnv?: boolean;
  settings?: Record<string, any>;
  use?: Array<string | { path: string; className: string; name?: string; isSingleton?: boolean }>;
  terraform?: Array<{ className: string; name: string }>;
  childs?: Record<string, ContainerConfiguration>;
  childPipelines?: Record<string, any[]>;
  pipelines?: string;
}

export class Dock extends Clonable {
  containers: Record<string, Container>

  constructor();

  getContainer(name?: string): Container;

  get(name: string): any;

  createContainer(
    name: string | ContainerConfiguration,
    settings?: ContainerConfiguration | string,
    srcMustLoadEnv?: boolean,
    preffix?: string,
    parent?: Container,
    pipelines?: any[],
  ): Promise<Container>;

  buildChilds(container: Container): Promise<void>;

  terraform(settings?: ContainerConfiguration | string, mustLoadEnv?: boolean): Promise<Container>;

  start(settings?: ContainerConfiguration | string, mustLoadEnv?: boolean): Promise<Container>;
}

// Exported variables and functions
export const dock: Dock

export function dockStart(
  settings?: ContainerConfiguration | string,
  mustLoadEnv?: boolean,
): Promise<Dock>;

export function containerBootstrap(
  inputSettings?: ContainerConfiguration | string,
  srcMustLoadEnv?: boolean,
  container?: Container,
  preffix?: string,
  pipelines?: any[],
  parent?: Container,
): Container;

// Helper functions
export function hasUnicode(str: string): boolean;

export function unicodeToArray(str: string): string[];

export function asciiToArray(str: string): string[];

export function stringToArray(str: string): string[];

export function compareWildcars(text: string, pattern: string): boolean;

export function getAbsolutePath(relative: string): string;

export function listFiles(folderPath: string, recursive?: boolean): string[];

export function listFilesAbsolute(folderPath: string, recursive?: boolean): string[];

export function loadEnv(fileName?: string): void;

// Re-exports from @nlpjs/core
export {
  Among,
  ArrToObj,
  BaseStemmer,
  Clonable,
  Container,
  defaultContainer,
  Normalizer,
  ObjToArr,
  Stemmer,
  Stopwords,
  Tokenizer,
  Timer,
  logger,
  MemoryStorage,
  uuid,
  Context,
  loadEnvFromJson,
} from '@nlpjs/core'
