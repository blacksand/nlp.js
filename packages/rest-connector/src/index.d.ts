declare module '@nlpjs/rest-connector' {
  import { Connector } from '@nlpjs/connector'
  import { Container } from '@nlpjs/core'

  class RestConnector extends Connector {
    constructor(settings?: any, container?: Container);

    public serve(port: number): Promise<void>;
  }

  export {
    RestConnector,
  }
}
