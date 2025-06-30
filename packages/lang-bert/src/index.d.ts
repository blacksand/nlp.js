import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

declare class LangBert {
  public name: string

  constructor(container?: any);
}

declare class TokenizerBert extends Tokenizer {
}

declare class StemmerBert extends Stemmer {
}

declare class StopwordsBert extends Stopwords {
}

declare class NormalizerBert extends Normalizer {
}

declare class SentimentBert {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangBert,
  StemmerBert,
  StopwordsBert,
  TokenizerBert,
  NormalizerBert,
  SentimentBert,
}
