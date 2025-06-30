import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangUk {
  public name: string

  constructor(container?: any);
}

class TokenizerUk extends Tokenizer {
}

class StemmerUk extends Stemmer {
}

class StopwordsUk extends Stopwords {
}

class NormalizerUk extends Normalizer {
}

class SentimentUk {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangUk,
  StemmerUk,
  StopwordsUk,
  TokenizerUk,
  NormalizerUk,
  SentimentUk,
}
