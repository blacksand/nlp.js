import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangEu {
  public name: string

  constructor(container?: any);
}

class TokenizerEu extends Tokenizer {
}

class StemmerEu extends Stemmer {
}

class StopwordsEu extends Stopwords {
}

class NormalizerEu extends Normalizer {
}

class SentimentEu {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangEu,
  StemmerEu,
  StopwordsEu,
  TokenizerEu,
  NormalizerEu,
  SentimentEu,
}
