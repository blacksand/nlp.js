declare module '@nlpjs/builtin-duckling' {
  import { Clonable, Container } from '@nlpjs/core'

  class BuiltinDuckling extends Clonable {
    constructor(settings?: any, container?: Container);

    public extract(srcInput: any): Promise<any>;

    public run(srcInput: any): Promise<any>;
  }

  export {
    BuiltinDuckling,
  }
}
