export interface SlotQuestions {
  [locale: string]: string;
}

export interface Slot {
  intent: string;
  entity: string;
  mandatory: boolean;
  locales: SlotQuestions;
}

export interface ProcessResult {
  intent: string;
  answer?: string;
  srcAnswer?: string;
  entities: any[]; // This can be IEntity from @nlpjs/nlp if needed, but for now keep it simple
  localeIso2?: string;
  utterance: string;
  slotFill?: SlotFillContext;
}

export interface SlotFillContext {
  intent: string;
  entities: any[];
  answer?: string;
  srcAnswer?: string;
  localeIso2?: string;
  currentSlot?: string;
  latestSlot?: string;
}

export type SlotManagerSettings  = {
  [intent: string]: {
    [entity: string]: Slot
  }
}

export interface Context {
  slotFill?: SlotFillContext;
  [key: string]: any; // For dynamic properties like entity aliases
}

export class SlotManager {
  public isEmpty: boolean;
  private intents: { [intent: string]: { [entity: string]: Slot } };

  constructor();

  getSlot(intent: string, entity: string): Slot | undefined;

  existsSlot(intent: string, entity: string): boolean;

  addSlot(intent: string, entity: string, mandatory?: boolean, questions?: SlotQuestions): Slot;

  updateSlot(intent: string, entity: string, mandatory: boolean, questions?: SlotQuestions): Slot;

  removeSlot(intent: string, entity: string): void;

  addBatch(intent: string, entities: string[]): Slot[];

  getIntentEntityNames(intent: string): string[];

  hasIntentEntities(intent: string): boolean;

  clear(): void;

  load(src: { [intent: string]: { [entity: string]: Slot } }): void;

  save(): { [intent: string]: { [entity: string]: Slot } };

  getMandatorySlots(intent: string): { [entity: string]: Slot };

  cleanContextEntities(intent: string, srcContext: Context): void;

  generateEntityAliases(entities: any[]): string[];

  process(srcResult: ProcessResult, srcContext: Context): boolean;
}
