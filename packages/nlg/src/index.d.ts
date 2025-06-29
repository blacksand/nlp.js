import { Clonable, Container } from '@nlpjs/core'

export class NlgManager extends Clonable {
  constructor(settings?: Partial<NlgManagerSettings>, container?: Container);

  registerDefault(): void;

  findAllAnswers(srcInput: any): any;

  filterAnswers(srcInput: any): any;

  chooseRandom(srcInput: any): any;

  renderText(srcText: string | { answer: string }, context: any): string | { answer: string };

  renderRandom(srcInput: any): any;

  indexOfAnswer(locale: string, intent: string, answer: string, opts: any): number;

  add(locale: string, intent: string, answer: string, opts: any): any;

  remove(locale: string, intent: string, answer: string, opts: any): void;

  defaultPipelineFind(input: any): any;

  find(locale: string, intent: string, context: any, settings: any): any;

  run(srcInput: any, settings: any): any;

  toJSON(): any;

  fromJSON(json: any): void;
}

export interface NlgManagerSettings {
  tag?: string;
  container?: Container;
}

export class ActionManager extends Clonable {
  constructor(settings?: Partial<ActionManagerSettings>, container?: Container);

  registerDefault(): void;

  posAction(intent: string, action: string, parameters: any[]): number;

  findActions(intent: string): any[];

  processActions(intent: string, input: any): Promise<any>;

  addAction(intent: string, action: string, parameters: any[], fn?: Function): void;

  removeAction(intent: string, action: string, parameters: any[]): void;

  removeActions(intent: string): void;

  registerActionInMap(action: string, fn: Function): void;

  removeActionFromMap(action: string): void;

  run(srcInput: any, settings: any): Promise<any>;

  toJSON(): any;

  fromJSON(json: any): void;
}

export interface ActionManagerSettings {
  tag?: string;
  container?: Container;
}