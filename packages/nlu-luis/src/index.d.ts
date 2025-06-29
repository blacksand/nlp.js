declare module '@nlpjs/nlu-luis' {
  import { Clonable, Container } from '@nlpjs/core'

  class NluLuis extends Clonable {
    constructor(settings?: any, container?: Container);

    public process(srcInput: any): Promise<any>;
  }

  export {
    NluLuis,
  }
}
