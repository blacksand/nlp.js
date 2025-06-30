import { Clonable, Container } from '@nlpjs/core'

class BertWordPieceTokenizer extends Clonable {
  constructor(settings?: any, container?: Container);

  public tokenize(text: string): string[];
}

class MultiBertWordPieceTokenizer extends Clonable {
  constructor(settings?: any, container?: Container);

  public tokenize(text: string, locale: string): string[];
}

export {
  BertWordPieceTokenizer,
  MultiBertWordPieceTokenizer,
}
