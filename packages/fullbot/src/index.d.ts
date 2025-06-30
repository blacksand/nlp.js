import { Bot } from '@nlpjs/bot'
import { Container } from '@nlpjs/core'

class FullBot extends Bot {
  constructor(settings?: any, container?: Container);

  public start(): Promise<void>;
}

export {
  FullBot,
}
