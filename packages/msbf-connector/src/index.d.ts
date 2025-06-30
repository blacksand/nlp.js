import { Connector } from '@nlpjs/connector'
import { Container } from '@nlpjs/core'

export class MsbfConnector extends Connector {
  constructor(settings?: any, container?: Container);

  public serve(port: number): Promise<void>;
}

export function generateMsbfToken(settings?: any): Promise<string>;
