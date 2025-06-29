import { Connector } from '@nlpjs/connector'
import { Clonable, Container } from '@nlpjs/core'
import { Nlp } from '@nlpjs/nlp'

declare module '@nlpjs/bot' {

  interface IAction {
    command: string;
    condition?: string;
    settings?: any;
    text?: string;
    dialog?: string;
    variableName?: string;
    validatorName?: string;
    parameters?: any;
    allowedIntents?: string[];
    functionName?: string;
    increment?: number;
    cardName?: string;
    value?: any;
  }

  interface IDialog {
    name: string;
    pipeline: IAction[];
    settings: any;
  }

  interface IValidation {
    isValid: boolean;
    changes?: { name: string, value: any }[];
  }

  class Bot extends Clonable {
    public settings: any
    public nlp: Nlp
    public actions: { [name: string]: (session: any, context: any, params: any) => Promise<void> }
    public validators: { [name: string]: (session: any, context: any, params: any) => Promise<IValidation> }
    public cards: { [name: string]: any }
    public dialogManager: DialogManager

    constructor(settings?: any, container?: Container);

    public start(): Promise<void>;

    public registerAction(name: string, fn: (session: any, context: any, params: any) => Promise<void>): void;

    public registerValidator(name: string, fn: (session: any, context: any, params: any) => Promise<IValidation>): void;

    public getValidator(name: string): (session: any, context: any, params: any) => Promise<IValidation>;

    public registerCard(name: string | any[] | { name: string, card: any }, card?: any): void;

    public setVariable(context: any, variableName: string, variableValue: any): Promise<void>;

    public getVariable(context: any, variableName: string): any;

    public beginDialog(session: any, context: any, dialog: string): Promise<void>;

    public executeAction(session: any, context: any, action: IAction | string): Promise<void>;

    public runValidation(session: any, context: any): Promise<boolean>;

    public process(session: any): Promise<void>;

    public addDialog(name: string, pipeline: IAction[], settings?: any): void;

    public loadScript(fileName: string): Promise<void>;

    public loadCorpus(corpus: any): void;
  }

  class DialogManager extends Clonable {
    public dialogs: { [name: string]: IDialog }

    constructor(settings?: any, container?: Container);

    public addDialog(name: string, pipeline: IAction[], settings?: any): void;

    public getDialog(name: string): IDialog;

    public getNextAction(stack: any[]): { dialog: string, lastExecuted: number, action: IAction };

    public beginDialog(stack: any[], dialogName: string): void;

    public endDialog(stack: any[]): void;

    public restartDialog(stack: any[]): void;

    public existsDialog(dialog: string): boolean;
  }

  class TestConnector extends Connector {
    public messages: string[]
    public expected: string[]

    constructor(settings?: any, container?: Container);

    public say(message: string | any, reference?: string): void;

    public hear(line: string): Promise<void>;

    public runScript(fileName: string): Promise<void>;
  }

  export {
    Bot,
    DialogManager,
    TestConnector,
    IAction,
    IDialog,
    IValidation,
  }
}
