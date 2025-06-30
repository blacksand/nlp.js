import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangCs {
  public name: string

  constructor(container?: any);
}

class TokenizerCs extends Tokenizer {
}

class StemmerCs extends Stemmer {
}

class StopwordsCs extends Stopwords {
}

class NormalizerCs extends Normalizer {
}

class SentimentCs {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangCs,
  StemmerCs,
  StopwordsCs,
  TokenizerCs,
  NormalizerCs,
  SentimentCs,
}
