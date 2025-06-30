import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangHi {
  public name: string

  constructor(container?: any);
}

class TokenizerHi extends Tokenizer {
}

class StemmerHi extends Stemmer {
}

class StopwordsHi extends Stopwords {
}

class NormalizerHi extends Normalizer {
}

class SentimentHi {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangHi,
  StemmerHi,
  StopwordsHi,
  TokenizerHi,
  NormalizerHi,
  SentimentHi,
}
