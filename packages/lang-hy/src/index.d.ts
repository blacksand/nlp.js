import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangHy {
  public name: string

  constructor(container?: any);
}

class TokenizerHy extends Tokenizer {
}

class StemmerHy extends Stemmer {
}

class StopwordsHy extends Stopwords {
}

class NormalizerHy extends Normalizer {
}

class SentimentHy {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangHy,
  StemmerHy,
  StopwordsHy,
  TokenizerHy,
  NormalizerHy,
  SentimentHy,
}
