import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangBn {
  public name: string

  constructor(container?: any);
}

class TokenizerBn extends Tokenizer {
}

class StemmerBn extends Stemmer {
}

class StopwordsBn extends Stopwords {
}

class NormalizerBn extends Normalizer {
}

class SentimentBn {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangBn,
  StemmerBn,
  StopwordsBn,
  TokenizerBn,
  NormalizerBn,
  SentimentBn,
}
