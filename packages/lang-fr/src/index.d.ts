import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangFr {
  public name: string

  constructor(container?: any);
}

class TokenizerFr extends Tokenizer {
}

class StemmerFr extends Stemmer {
}

class StopwordsFr extends Stopwords {
}

class NormalizerFr extends Normalizer {
}

class SentimentFr {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangFr,
  StemmerFr,
  StopwordsFr,
  TokenizerFr,
  NormalizerFr,
  SentimentFr,
}
