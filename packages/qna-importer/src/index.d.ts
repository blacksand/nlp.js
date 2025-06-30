import { Clonable, Container } from '@nlpjs/core'

export class QnaImporter extends Clonable {
  constructor(settings?: any, container?: Container);

  public import(fileName: string): Promise<any>;
}
