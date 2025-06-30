import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangRo {
  public name: string

  constructor(container?: any);
}

class TokenizerRo extends Tokenizer {
}

class StemmerRo extends Stemmer {
}

class StopwordsRo extends Stopwords {
}

class NormalizerRo extends Normalizer {
}

class SentimentRo {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangRo,
  StemmerRo,
  StopwordsRo,
  TokenizerRo,
  NormalizerRo,
  SentimentRo,
}
