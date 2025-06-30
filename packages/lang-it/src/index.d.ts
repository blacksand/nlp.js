import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangIt {
  public name: string

  constructor(container?: any);
}

class TokenizerIt extends Tokenizer {
}

class StemmerIt extends Stemmer {
}

class StopwordsIt extends Stopwords {
}

class NormalizerIt extends Normalizer {
}

class SentimentIt {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangIt,
  StemmerIt,
  StopwordsIt,
  TokenizerIt,
  NormalizerIt,
  SentimentIt,
}
