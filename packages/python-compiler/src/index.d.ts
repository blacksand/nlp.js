import { Container } from '@nlpjs/core'
import { JavascriptCompiler } from '@nlpjs/evaluator'
import { Token } from '@nlpjs/lexer'

// Internal interfaces/types
interface Names {
  vars?: string[];
  defs?: string[];
  args?: string[];
  globals?: string[];
  defargs?: { [key: string]: string[] };
}

interface TranspileOptions {
  names?: Names;
  exports?: boolean;
}

// Base Expression class
class Expression {
  constructor(...args: any[]);

  transpile(options?: TranspileOptions): string;

  transpileVars(names?: Names): string;

  alreadyDefined(name: string, names: Names): boolean;

  addVarName(name: string, names: Names): void;

  addDefName(name: string, args: string[], names: Names): void;

  transpileExports(names: Names): string;

  collectNames(names: Names): void;
}

// PythonCompiler class
export class PythonCompiler extends JavascriptCompiler {
  constructor(container?: Container);

  transpile(text: string): string;

  compile(pipeline: string | string[]): string;

  evaluate(str: string, context: any): Promise<any>; // Refine context and return type if possible
  execute(compiled: string, srcInput: any, srcObject: any): Promise<void>; // Refine srcInput and srcObject if possible
}

// PythonParser class
export class PythonParser {
  constructor(text: string);

  static transpile(text: string): string;

  nextToken(): Token | undefined;

  parseToken(value: string, type: number): void;

  tryParseEndOfCommand(): boolean;

  parseEndOfLine(): Token | undefined;

  tryParseName(): string | undefined;

  tryParseToken(value: string, type: number): boolean;

  tryParseType(type: number): string | undefined;

  tryParseEndOfLine(): boolean;

  tryParseOperator(): string | undefined;

  tryParseAssignment(): string | undefined;

  parseSuite(indent: number): Expression;

  parseExpressionCommand(): ExpressionCommand;

  parseKeyValueList(): { key: Expression; value: Expression }[];

  parseNames(): string[];

  parseName(): string;

  parseSingleLineSuite(indent: number): Expression;

  parseMultiLineSuite(indent: number): Expression;

  parseExpressionList(): Expression[];

  parseTerm(): Expression | undefined;

  parseSimpleExpression(): Expression | undefined;

  parseExpression(): Expression | undefined;

  parseCommand(indent?: number): Expression | undefined;

  parseSimpleCommand(indent: number): Expression | undefined;
}

// executePython function
export function executePython(str: string, context?: any): any; // Refine context and return type if possible

export type {
  Expression,
  Token,
  ExpressionCommand,
  TranspileOptions,
}
