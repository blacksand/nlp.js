import { Connector } from '@nlpjs/connector'
import { Container } from '@nlpjs/core'

class FbConnector extends Connector {
  constructor(settings?: any, container?: Container);

  public serve(port: number): Promise<void>;
}

export {
  FbConnector,
}
