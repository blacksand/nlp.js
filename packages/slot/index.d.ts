export class SlotManager {
  isEmpty: boolean

  constructor();

  getSlot(intent: string, entity: string): any;

  existsSlot(intent: string, entity: string): boolean;

  addSlot(intent: string, entity: string, mandatory?: boolean, questions?: { [locale: string]: string }): any;

  updateSlot(intent: string, entity: string, mandatory: boolean, questions?: { [locale: string]: string }): any;

  removeSlot(intent: string, entity: string): void;

  addBatch(intent: string, entities: string[]): any[];

  getIntentEntityNames(intent: string): string[];

  hasIntentEntities(intent: string): boolean;

  clear(): void;

  load(src: any): void;

  save(): any;

  getMandatorySlots(intent: string): any;

  cleanContextEntities(intent: string, srcContext: any): void;

  generateEntityAliases(entities: any[]): string[];

  process(srcResult: any, srcContext: any): boolean;
}
