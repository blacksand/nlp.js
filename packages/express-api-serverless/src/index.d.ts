declare module '@nlpjs/express-api-serverless' {
  import { Container } from '@nlpjs/core'

  class ExpressApiServerless {
    constructor(settings?: any, container?: Container);

    public start(): Promise<void>;

    public stop(): Promise<void>;
  }

  export {
    ExpressApiServerless,
  }
}
