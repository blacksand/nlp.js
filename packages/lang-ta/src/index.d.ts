import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangTa {
  public name: string

  constructor(container?: any);
}

class TokenizerTa extends Tokenizer {
}

class StemmerTa extends Stemmer {
}

class StopwordsTa extends Stopwords {
}

class NormalizerTa extends Normalizer {
}

class SentimentTa {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangTa,
  StemmerTa,
  StopwordsTa,
  TokenizerTa,
  NormalizerTa,
  SentimentTa,
}
