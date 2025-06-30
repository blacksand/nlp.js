import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangGa {
  public name: string

  constructor(container?: any);
}

class TokenizerGa extends Tokenizer {
}

class StemmerGa extends Stemmer {
}

class StopwordsGa extends Stopwords {
}

class NormalizerGa extends Normalizer {
}

class SentimentGa {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangGa,
  StemmerGa,
  StopwordsGa,
  TokenizerGa,
  NormalizerGa,
  SentimentGa,
}
