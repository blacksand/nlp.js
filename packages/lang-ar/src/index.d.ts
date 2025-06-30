import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

declare class LangAr {
  public name: string

  constructor(container?: any);
}

declare class TokenizerAr extends Tokenizer {
}

declare class StemmerAr extends Stemmer {
}

declare class StopwordsAr extends Stopwords {
}

declare class NormalizerAr extends Normalizer {
}

declare class SentimentAr {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangAr,
  StemmerAr,
  StopwordsAr,
  TokenizerAr,
  NormalizerAr,
  SentimentAr,
}
