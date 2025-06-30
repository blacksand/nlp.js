import { Connector } from '@nlpjs/connector'
import { Container } from '@nlpjs/core'

export class RestConnector extends Connector {
  constructor(settings?: any, container?: Container);

  public serve(port: number): Promise<void>;
}
