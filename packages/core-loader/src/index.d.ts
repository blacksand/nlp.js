import { Clonable, Container } from '@nlpjs/core'

interface ContainerConfiguration {
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

class Dock extends Clonable {
  containers: Record<string, Container>

  constructor();

  getContainer(name?: string): Container;

  get<T = any>(name: string): T;

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
const dock: Dock

function dockStart(
  settings?: ContainerConfiguration | string,
  mustLoadEnv?: boolean,
): Promise<Dock>;

function containerBootstrap(
  inputSettings?: ContainerConfiguration | string,
  srcMustLoadEnv?: boolean,
  container?: Container,
  preffix?: string,
  pipelines?: any[],
  parent?: Container,
): Container;

// Helper functions
function hasUnicode(str: string): boolean;

function unicodeToArray(str: string): string[];

function asciiToArray(str: string): string[];

function stringToArray(str: string): string[];

function compareWildcars(text: string, pattern: string): boolean;

function getAbsolutePath(relative: string): string;

function listFiles(folderPath: string, recursive?: boolean): string[];

function listFilesAbsolute(folderPath: string, recursive?: boolean): string[];

function loadEnv(fileName?: string): void;

// Re-exports from @nlpjs/core
export {
  Among,
  ArrToObj,
  BaseStemmer,
  Clonable,
  Container,
  ContainerConfiguration,
  Context,
  Dock,
  MemoryStorage,
  Normalizer,
  ObjToArr,
  Stemmer,
  Stopwords,
  Timer,
  Tokenizer,
  asciiToArray,
  compareWildcars,
  containerBootstrap,
  defaultContainer,
  dock,
  dockStart,
  getAbsolutePath,
  hasUnicode,
  listFiles,
  listFilesAbsolute,
  loadEnv,
  loadEnvFromJson,
  logger,
  stringToArray,
  unicodeToArray,
  uuid,
} from '@nlpjs/core'
