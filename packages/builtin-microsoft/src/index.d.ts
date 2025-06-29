import { Clonable, Container } from '@nlpjs/core'

export class BuiltinMicrosoft extends Clonable {
  constructor(settings?: Partial<BuiltinMicrosoftSettings>, container?: Container);

  registerDefault(): void;

  translate(str: string, locale: string): string;

  inverseTranslate(str: string, locale: string): string;

  calculateResolution(entity: any, locale: string): any;

  prereduceEdges(edges: any[]): any[];

  findBuiltinEntities(utterance: string, locale: string, srcBuiltins: string[]): { edges: any[]; source: any[] };

  extract(srcInput: any): Promise<any>;

  run(srcInput: any): any;
}

export interface BuiltinMicrosoftSettings {
  tag?: string;
  allowList?: string[];
  builtinAllowList?: { [key: string]: number };
  container?: Container;
}