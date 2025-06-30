import { Clonable, Container } from '@nlpjs/core'

class Connector extends Clonable {
  constructor(settings?: any, container?: Container);

  public onHear(callback: (connector: Connector, line: string) => void): void;

  public say(message: string | any, reference?: string): void;

  public hear(line: string): Promise<void>;
}

export {
  Connector,
}
