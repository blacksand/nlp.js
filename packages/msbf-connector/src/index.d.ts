declare module '@nlpjs/msbf-connector' {
  import { Connector } from '@nlpjs/connector'
  import { Container } from '@nlpjs/core'
  import { ActivityTypes, BotFrameworkAdapter } from 'botbuilder'

  class MsbfConnector extends Connector {
    constructor(settings?: any, container?: Container);

    public serve(port: number): Promise<void>;
  }

  function generateMsbfToken(settings?: any): Promise<string>;

  export {
    MsbfConnector,
    generateMsbfToken,
    BotFrameworkAdapter,
    ActivityTypes,
  }
}
