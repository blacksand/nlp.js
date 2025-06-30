import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangDe {
  public name: string

  constructor(container?: any);
}

class TokenizerDe extends Tokenizer {
}

class StemmerDe extends Stemmer {
}

class StopwordsDe extends Stopwords {
}

class NormalizerDe extends Normalizer {
}

class SentimentDe {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangDe,
  StemmerDe,
  StopwordsDe,
  TokenizerDe,
  NormalizerDe,
  SentimentDe,
}
