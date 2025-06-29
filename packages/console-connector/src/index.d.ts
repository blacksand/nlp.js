declare module '@nlpjs/console-connector' {
  import { Connector } from '@nlpjs/connector'
  import { Container } from '@nlpjs/core'

  class ConsoleConnector extends Connector {
    constructor(settings?: any, container?: Container);

    public run(): void;
  }

  export {
    ConsoleConnector,
  }
}
