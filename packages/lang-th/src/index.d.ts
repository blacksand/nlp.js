import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangTh {
  public name: string

  constructor(container?: any);
}

class TokenizerTh extends Tokenizer {
}

class StemmerTh extends Stemmer {
}

class StopwordsTh extends Stopwords {
}

class NormalizerTh extends Normalizer {
}

class SentimentTh {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangTh,
  StemmerTh,
  StopwordsTh,
  TokenizerTh,
  NormalizerTh,
  SentimentTh,
}
