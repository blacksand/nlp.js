declare module '@nlpjs/open-question' {
  import { Clonable, Container } from '@nlpjs/core'

  class ModelDownloader extends Clonable {
    constructor(settings?: any, container?: Container);

    public download(): Promise<void>;
  }

  class Model extends Clonable {
    constructor(settings?: any, container?: Container);

    public load(): Promise<void>;

    public process(input: any): Promise<any>;
  }

  class Runtime extends Clonable {
    constructor(settings?: any, container?: Container);

    public start(): Promise<void>;

    public stop(): Promise<void>;

    public process(input: any): Promise<any>;
  }

  class QAClient extends Clonable {
    constructor(settings?: any, container?: Container);

    public process(input: any): Promise<any>;
  }

  export {
    BertTokenizer,
    ModelDownloader,
    Model,
    Runtime,
    QAClient,
  }
}
