import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangJa {
  public name: string

  constructor(container?: any);
}

class TokenizerJa extends Tokenizer {
}

class StemmerJa extends Stemmer {
}

class StopwordsJa extends Stopwords {
}

class NormalizerJa extends Normalizer {
}

class SentimentJa {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangJa,
  StemmerJa,
  StopwordsJa,
  TokenizerJa,
  NormalizerJa,
  SentimentJa,
}
