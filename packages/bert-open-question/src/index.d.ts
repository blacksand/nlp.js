declare module '@nlpjs/bert-open-question' {
  import { Clonable, Container } from '@nlpjs/core'

  class BertOpenQuestion extends Clonable {
    constructor(settings?: any, container?: Container);

    public answer(context: string, question: string): Promise<any>;
  }

  export {
    BertOpenQuestion,
  }
}
