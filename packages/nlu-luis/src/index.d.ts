import { Container } from '@nlpjs/core'
import { CorpusItem, Nlu, NluSettings } from '@nlpjs/nlu'

export interface NluLuisSettings extends NluSettings {
  luisUrl?: string;
  useStemmer?: boolean;
}

export interface LuisCorpus {
  luis_schema_version: string;
  versionId: string;
  name: string;
  desc: string;
  culture: string;
  tokenizerVersion: string;
  intents: { name: string }[];
  entities: any[]; // Can be refined if Luis entity structure is known
  composites: any[];
  closedLists: any[];
  patternAnyEntities: any[];
  regex_entities: any[];
  prebuiltEntities: any[];
  model_features: any[];
  regex_features: any[];
  patterns: any[];
  utterances: { text: string; intent: string; entities: any[] }[];
  settings: any[];
}

export class NluLuis extends Nlu {
  constructor(settings?: Partial<NluLuisSettings>, container?: Container);

  innerTrain(srcInput: any): any; // Can be refined
  innerProcess(srcInput: any): Promise<any>; // Can be refined
  processUtterance(utterance: string): Promise<any>; // Can be refined
  registerDefault(): void;

  fromCorpus(
    corpus: { name: string; locale: string; data: CorpusItem[] },
    transformer?: (utterance: string, locale: string) => string,
  ): LuisCorpus;
}
