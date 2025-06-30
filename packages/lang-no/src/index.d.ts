import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangNo {
  public name: string

  constructor(container?: any);
}

class TokenizerNo extends Tokenizer {
}

class StemmerNo extends Stemmer {
}

class StopwordsNo extends Stopwords {
}

class NormalizerNo extends Normalizer {
}

class SentimentNo {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangNo,
  StemmerNo,
  StopwordsNo,
  TokenizerNo,
  NormalizerNo,
  SentimentNo,
}
