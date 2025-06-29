declare module '@nlpjs/qna-importer' {
  import { Clonable, Container } from '@nlpjs/core'

  class QnaImporter extends Clonable {
    constructor(settings?: any, container?: Container);

    public import(fileName: string): Promise<any>;
  }

  export {
    QnaImporter,
  }
}
