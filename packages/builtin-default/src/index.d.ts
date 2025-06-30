import { Clonable, Container } from '@nlpjs/core'

interface IEntity {
  start: number;
  end: number;
  len: number;
  accuracy: number;
  sourceText: string;
  utteranceText: string;
  entity: string;
  resolution: any;
}

interface IBuiltinSettings {
  tag?: string;
  builtins?: string[];
}

class BuiltinDefault extends Clonable {
  public settings: IBuiltinSettings

  constructor(settings?: IBuiltinSettings, container?: Container);

  public registerDefault(): void;

  public prereduceEdges(edges: IEntity[]): IEntity[];

  public findBuiltinEntities(utterance: string, locale: string, srcBuiltins?: string[]): { edges: IEntity[] };

  public extract(srcInput: any): any;

  public run(srcInput: any): any;
}

function recognize(text: string, regex: RegExp, entityName: string, typeName?: string): IEntity[];

function recognizeEmail(text: string): IEntity[];

function recognizeURL(text: string): IEntity[];

function recognizeIPv4(text: string): IEntity[];

function recognizeIPv6(text: string): IEntity[];

function recognizeHexColor(text: string): IEntity[];

function recognizeTime(text: string): IEntity[];

function recognizePhoneNumber(text: string): IEntity[];

function recognizeIpAddress(text: string): IEntity[];

function recognizeHashtag(text: string): IEntity[];

function recognizeNumber(text: string): IEntity[];

function recognizeDate(text: string): IEntity[];

class Recognizers {
  static recognizeEmail(text: string): IEntity[];

  static recognizeURL(text: string): IEntity[];

  static recognizeIPv4(text: string): IEntity[];

  static recognizeIPv6(text: string): IEntity[];

  static recognizeHexColor(text: string): IEntity[];

  static recognizeTime(text: string): IEntity[];

  static recognizePhoneNumber(text: string): IEntity[];

  static recognizeIpAddress(text: string): IEntity[];

  static recognizeHashtag(text: string): IEntity[];

  static recognizeNumber(text: string): IEntity[];

  static recognizeDate(text: string): IEntity[];
}

export {
  BuiltinDefault,
  Recognizers,
  recognize,
  recognizeEmail,
  recognizeURL,
  recognizeIPv4,
  recognizeIPv6,
  recognizeHexColor,
  recognizeTime,
  recognizePhoneNumber,
  recognizeIpAddress,
  recognizeHashtag,
  recognizeNumber,
  recognizeDate,
  IEntity,
  IBuiltinSettings,
}
