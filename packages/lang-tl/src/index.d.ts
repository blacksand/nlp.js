import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangTl {
  public name: string

  constructor(container?: any);
}

class TokenizerTl extends Tokenizer {
}

class StemmerTl extends Stemmer {
}

class StopwordsTl extends Stopwords {
}

class NormalizerTl extends Normalizer {
}

class SentimentTl {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangTl,
  StemmerTl,
  StopwordsTl,
  TokenizerTl,
  NormalizerTl,
  SentimentTl,
}
