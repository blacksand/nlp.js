import { Clonable, Container } from '@nlpjs/core'

export class BuiltinCompromise extends Clonable {
  constructor(settings?: Partial<BuiltinCompromiseSettings>, container?: Container);

  static getCulture(locale: string): string;

  registerDefault(): void;

  findBuiltinEntities(utterance: string): Promise<{ edges: any[] }>;

  extract(srcInput: any): Promise<any>;

  run(srcInput: any): any;
}

export interface BuiltinCompromiseSettings {
  tag?: string;
  container?: Container;
}
