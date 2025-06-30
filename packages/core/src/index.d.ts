import { Container } from './container'

type AmongMethod = (instance: any) => boolean;

class Among {
  s_size: number
  s: string
  substring_i: number
  result: any
  method: AmongMethod
  instance: any

  constructor(s: string, sub: number, result: any, method: AmongMethod, instance: any);
}

interface InputObject {
  tokens?: string[];
  locale?: string;
  text?: string;
  hrstart?: Date;
  elapsed?: number;
  settings?: { [key: string]: any };
  utterance?: string;
  intent?: string;
}

class ArrToObj {
  public container: Container
  public name: string

  constructor(container?: Container);

  static arrToObj(arr: any[]): Record<string, number>;

  run(input: InputObject | any[]): Record<string, number> | InputObject;
}

interface Dictionary {
  before: Record<string, string>;
  after: Record<string, string>;
}

class BaseStemmer {
  public container: Container
  public cache: Record<string, string>
  public current: string
  public cursor: number
  public limit: number
  public limit_backward: number
  public bra: number
  public ket: number
  public dictionary: Dictionary
  public tokenizer?: Tokenizer
  public stopwords?: Stopwords

  constructor(container?: Container, dictionary?: Dictionary);

  setCurrent(value: string): void;

  getCurrent(): string;

  bc(s: number[], ch: number): boolean;

  in_grouping(s: number[], min: number, max: number): boolean;

  in_grouping_b(s: number[], min: number, max: number): boolean;

  out_grouping(s: number[], min: number, max: number): boolean;

  out_grouping_b(s: number[], min: number, max: number): boolean;

  eq_s(s_size: number | string, s?: string): boolean;

  eq_s_b(s_size: number | string, s?: string): boolean;

  find_among(v: Among[], v_size?: number): number;

  find_among_b(v: Among[], v_size?: number): number;

  replace_s(c_bra: number, c_ket: number, s: string): number;

  slice_check(): boolean;

  slice_from(s: string): boolean;

  slice_del(): boolean;

  insert(c_bra: number, c_ket: number, s: string): void;

  slice_to(s: string): string;

  stemWord(word: string): string;

  stemWords(words: string[]): string[];

  stem(tokens: string | string[] | null | undefined): string | string[] | null | undefined;

  getTokenizer(): Tokenizer;

  getStopwords(): Stopwords;

  tokenizeAndStem(text: string, keepStops?: boolean): string[];

  protected innerStem(): void;
}

interface ClonableSettings {
  container?: Container;

  [key: string]: any;
}

class Clonable {
  public container: Container
  public readonly logger: Logger

  constructor(settings?: ClonableSettings, container?: Container);

  applySettings(srcobj: Record<string, any>, settings?: Record<string, any>): Record<string, any>;

  toJSON(): Record<string, any>;

  fromJSON(json: Record<string, any>): void;

  objToValues(obj: Record<string, any>, srcKeys?: string[]): any[];

  valuesToObj(values: any[], keys: string[]): Record<string, any>;

  getPipeline(tag: string): Pipeline | undefined | null;

  runPipeline(input: any, pipeline?: string | Pipeline): Promise<any>;

  use(item: any): void;
}

interface Compiler {
  name: string;
  container: Container;

  compile(pipeline: string[]): Token[][];

  execute(compiled: Token[][], srcInput: any, srcObject: any, depth: number): Promise<any>;
}

interface Token {
  type: string;
  value: string;
  arguments?: any[];
}

interface ExecutionContext {
  cursor: number;
  labels: Record<string, number>;
  floating?: boolean;

  [key: string]: any;
}

interface Literal {
  type: 'literal';
  subtype: string;
  src: string;
  value: any;
  context: Record<string, any>;
  container: Container;
}

interface PathResolution {
  type: 'literal' | 'function' | 'reference';
  src: string;
  value: any;
  context: Record<string, any>;
  container: Container;
}

interface Pipeline {
  pipeline: string[];
  compiler: Compiler;
  compiled: Token[][];
}

interface PipelineDefinition {
  tag: string;
  pipeline: string[];
  overwrite?: boolean;
}

class Container {
  public parent?: Container
  public classes: Record<string, any>
  public factory: Record<string, any>
  public pipelines: Record<string, Pipeline>
  public configurations: Record<string, any>
  public compilers: Record<string, Compiler>
  public cache: { bestKeys: Record<string, string | null>; pipelines: Record<string, Pipeline | null> }
  public childs?: Record<string, any>
  public childPipelines?: Record<string, PipelineDefinition[]>
  public name?: string
  public dock?: Dock

  constructor(hasPreffix?: boolean);

  registerCompiler(Compiler: { new(container: Container): Compiler }, name?: string): void;

  addClass(clazz: any, name?: string): void;

  toJSON(instance: any): Record<string, any>;

  fromJSON(obj: Record<string, any>, settings?: Record<string, any>): any;

  register(name: string, Clazz: any, isSingleton?: boolean): void;

  getBestKey(name: string): string | undefined | null;

  get(name: string, settings?: Record<string, any>): any;

  buildLiteral(subtype: string, step: string, value: any, context: Record<string, any>): Literal;

  resolvePathWithType(step: string, context: Record<string, any>, input: any, srcObject: any): PathResolution;

  resolvePath(step: string, context: Record<string, any>, input: any, srcObject: any): any;

  setValue(path: string, valuePath: string, context: Record<string, any>, input: any, srcObject: any): void;

  incValue(path: string, valuePath: string, context: Record<string, any>, input: any, srcObject: any): void;

  decValue(path: string, valuePath: string, context: Record<string, any>, input: any, srcObject: any): void;

  eqValue(pathA: string, pathB: string, srcContext: Record<string, any>, input: any, srcObject: any): void;

  neqValue(pathA: string, pathB: string, srcContext: Record<string, any>, input: any, srcObject: any): void;

  gtValue(pathA: string, pathB: string, srcContext: Record<string, any>, input: any, srcObject: any): void;

  geValue(pathA: string, pathB: string, srcContext: Record<string, any>, input: any, srcObject: any): void;

  ltValue(pathA: string, pathB: string, srcContext: Record<string, any>, input: any, srcObject: any): void;

  leValue(pathA: string, pathB: string, srcContext: Record<string, any>, input: any, srcObject: any): void;

  deleteValue(path: string, context: Record<string, any>, input: any, srcObject: any): void;

  getValue(srcPath: string, context: Record<string, any>, input: any, srcObject: any): any;

  runPipeline(srcPipeline: string | Pipeline, input: any, srcObject: any, depth?: number): Promise<any>;

  use(item: any, name?: string, isSingleton?: boolean, onlyIfNotExists?: boolean): string;

  getCompiler(name: string): Compiler;

  buildPipeline(srcPipeline: string[], prevPipeline?: string[]): Pipeline;

  registerPipeline(tag: string, pipeline: string[], overwrite?: boolean): void;

  registerPipelineForChilds(childName: string, tag: string, pipeline: string[], overwrite?: boolean): void;

  getPipeline(tag: string): Pipeline | undefined | null;

  registerConfiguration(tag: string, configuration: any, overwrite?: boolean): void;

  getConfiguration(tag: string): any;

  loadPipelinesFromString(str?: string): void;

  start(pipelineName?: string): Promise<void>;
}

const defaultContainer: Container

function containerBootstrap(
  inputSettings?: Record<string, any>,
  mustLoadEnv?: boolean,
  container?: Container,
  preffix?: string,
  pipelines?: PipelineDefinition[],
  parent?: Container,
): Container;

interface ContextSettings {
  tag?: string;
  storageName?: string;
  container?: Container;

  [key: string]: any;
}

class Context extends Clonable {
  public settings: ContextSettings
  public container: Container

  constructor(settings?: ContextSettings, container?: Container);

  getStorage(): MemoryStorage;

  getContext(key: string): Promise<any>;

  setContext(key: string, value: any): Promise<any>;

  getContextValue(key: string, valueName: string): Promise<any>;

  setContextValue(key: string, valueName: string, value: any): Promise<any>;
}

class DefaultCompiler implements Compiler {
  public name: string
  public container: Container

  constructor(container: Container);

  getTokenFromWord(word: string): Token;

  compile(pipeline: string[]): Token[][];

  executeCall(firstToken: Token, context: ExecutionContext, input: any, srcObject: any, depth: number): Promise<any>;

  executeReference(step: Token[], firstToken: Token, context: ExecutionContext, input: any, srcObject: any): any;

  doGoto(label: string, srcContext: ExecutionContext): void;

  executeAction(step: Token[], context: ExecutionContext, input: any, srcObject: any, depth: number): Promise<any>;

  findLabels(compiled: Token[][], srcLabels: Record<string, number>): void;

  execute(compiled: Token[][], srcInput: any, srcObject: any, depth: number): Promise<any>;
}

class Dock {
  public containers: Record<string, Container>

  constructor();

  getContainer(name?: string): Container;

  createContainer(
    name: string | Record<string, any>,
    settings?: Record<string, any>,
    srcMustLoadEnv?: boolean,
    preffix?: string,
    parent?: Container,
    pipelines?: PipelineDefinition[],
  ): Promise<Container>;

  buildChilds(container: Container): Promise<void>;

  terraform(settings?: Record<string, any>, mustLoadEnv?: boolean): Promise<Container>;

  start(settings?: Record<string, any>, mustLoadEnv?: boolean): Promise<Container>;
}

const dock: Dock

function hasUnicode(str: string): boolean;

function unicodeToArray(str: string): string[];

function asciiToArray(str: string): string[];

function stringToArray(str: string): string[];

function compareWildcars(text: string, pattern: string): boolean;

function loadEnv(preffix: string, json?: Record<string, string>): void; // Alias for loadEnvFromJson

class Logger {
  public name: string

  constructor();

  debug(...args: any[]): void;

  info(...args: any[]): void;

  warn(...args: any[]): void;

  error(...args: any[]): void;

  log(...args: any[]): void;

  trace(...args: any[]): void;

  fatal(...args: any[]): void;
}

interface MemoryStorageSettings {
  etag?: number;
  memory?: Record<string, string>;
  tag?: string;
  container?: Container;

  [key: string]: any;
}

class MemoryStorage extends Clonable {
  public settings: MemoryStorageSettings
  public container: Container

  constructor(settings?: MemoryStorageSettings, container?: Container);

  read(keys: string | string[]): Promise<Record<string, any>>;

  saveItem(key: string, item: any): any;

  write(changes: Record<string, any>): Promise<any>;

  delete(keys: string[]): Promise<void>;
}

interface FileSystem {
  name: string;

  readFile(): Promise<undefined>;

  writeFile(): Promise<never>;

  existsSync(): boolean;

  lstatSync(): undefined;

  readFileSync(): undefined;
}

const fs: FileSystem

class Normalizer {
  public container: Container
  public name: string
  public normalizer?: Normalizer

  constructor(container?: Container);

  normalize(text: string): string;

  getNormalizer(): Normalizer;

  run(srcInput: InputObject): InputObject;
}

class ObjToArr {
  public container: Container
  public name: string

  constructor(container?: Container);

  static objToArr(obj: Record<string, any>): string[];

  run(input: InputObject | Record<string, any>): string[] | InputObject;
}

class Stemmer {
  public container: Container
  public name: string

  constructor(container?: Container);

  stem(tokens: string[]): string[];

  getStemmer(srcInput: InputObject): BaseStemmer | Stemmer;

  addForTraining(srcInput: InputObject): Promise<any>;

  train(srcInput: InputObject): Promise<any>;

  run(srcInput: InputObject): Promise<InputObject>;
}

class Stopwords {
  public container: Container
  public name: string
  public dictionary: Record<string, boolean>

  constructor(container?: Container);

  build(list: string[]): void;

  isNotStopword(token: string): boolean;

  isStopword(token: string): boolean;

  removeStopwords(tokens: string[]): string[];

  run(srcInput: InputObject): InputObject;
}

class Timer {
  public container: Container
  public name: string

  constructor(container?: Container);

  start(input?: InputObject): InputObject;

  stop(srcInput?: InputObject): InputObject;

  run(srcInput: InputObject): InputObject;
}

class Tokenizer {
  public container: Container
  public name: string
  public shouldNormalize: boolean
  public normalizer?: Normalizer
  public cache?: { created: number; normalized: Record<string, string[]>; nonNormalized: Record<string, string[]> }

  constructor(container?: Container, shouldNormalize?: boolean);

  getNormalizer(): Normalizer;

  normalize(text: string, force?: boolean): string;

  innerTokenize(text: string): string[];

  tokenize(text: string, normalize?: boolean): string[];

  run(srcInput: InputObject): Promise<InputObject>;
}

function uuid(): string;

function dockStart(settings: Record<string, any>, mustLoadEnv?: boolean): Promise<Dock>;

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

export type {
  // Exported internal types
  AmongMethod,
  Dictionary,
  InputObject,
  ClonableSettings,
  Compiler,
  DefaultCompiler,
  Token,
  ExecutionContext,
  Literal,
  PathResolution,
  Pipeline,
  PipelineDefinition,
  ContextSettings,
  MemoryStorageSettings,
  FileSystem,
  fs,
}
