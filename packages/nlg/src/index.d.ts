import { Clonable, Container } from '@nlpjs/core'

export interface NlgSettings {
  tag?: string;
  container?: Container;
}

export interface Answer {
  answer: string;
  opts?: string | { condition: string };
}

export interface NlgInput {
  locale: string;
  intent: string;
  context?: any;
  settings?: NlgSettings;
  answers?: Answer[];
  answer?: string;
}

export class NlgManager extends Clonable {
  constructor(settings?: Partial<NlgSettings>, container?: Container);

  registerDefault(): void;

  findAllAnswers(input: NlgInput): NlgInput;

  filterAnswers(input: NlgInput): NlgInput;

  chooseRandom(input: NlgInput): NlgInput;

  renderText(srcText: string | Answer, context: any): string | Answer;

  renderRandom(input: NlgInput): NlgInput;

  indexOfAnswer(locale: string, intent: string, answer: string, opts?: string | { condition: string }): number;

  add(locale: string, intent: string, answer: string, opts?: string | { condition: string }): Answer;

  remove(locale: string, intent: string, answer: string, opts?: string | { condition: string }): void;

  defaultPipelineFind(input: NlgInput): NlgInput;

  find(locale: string, intent: string, context?: any, settings?: NlgSettings): NlgInput;

  run(srcInput: NlgInput, settings?: NlgSettings): NlgInput;

  toJSON(): any;

  fromJSON(json: any): void;
}

export interface ActionManagerSettings {
  tag?: string;
  container?: Container;
}

export interface Action {
  action: string;
  parameters: any[];
  fn?: Function;
}

export class ActionManager extends Clonable {
  constructor(settings?: Partial<ActionManagerSettings>, container?: Container);

  registerDefault(): void;

  posAction(intent: string, action: string, parameters: any[]): number;

  findActions(intent: string): Action[];

  processActions(intent: string, input: any): Promise<any>;

  addAction(intent: string, action: string, parameters: any[], fn?: Function): void;

  removeAction(intent: string, action: string, parameters: any[]): void;

  removeActions(intent: string): void;

  registerActionInMap(action: string, fn: Function): void;

  removeActionFromMap(action: string): void;

  run(srcInput: { intent: string; settings?: ActionManagerSettings }, settings?: ActionManagerSettings): Promise<any>;

  toJSON(): any;

  fromJSON(json: any): void;
}
