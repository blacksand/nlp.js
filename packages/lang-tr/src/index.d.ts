import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangTr {
  public name: string

  constructor(container?: any);
}

class TokenizerTr extends Tokenizer {
}

class StemmerTr extends Stemmer {
}

class StopwordsTr extends Stopwords {
}

class NormalizerTr extends Normalizer {
}

class SentimentTr {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangTr,
  StemmerTr,
  StopwordsTr,
  TokenizerTr,
  NormalizerTr,
  SentimentTr,
}
