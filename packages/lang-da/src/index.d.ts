import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangDa {
  public name: string

  constructor(container?: any);
}

class TokenizerDa extends Tokenizer {
}

class StemmerDa extends Stemmer {
}

class StopwordsDa extends Stopwords {
}

class NormalizerDa extends Normalizer {
}

class SentimentDa {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangDa,
  StemmerDa,
  StopwordsDa,
  TokenizerDa,
  NormalizerDa,
  SentimentDa,
}
