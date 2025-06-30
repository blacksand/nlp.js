import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangEs {
  public name: string

  constructor(container?: any);
}

class TokenizerEs extends Tokenizer {
}

class StemmerEs extends Stemmer {
}

class StopwordsEs extends Stopwords {
}

class NormalizerEs extends Normalizer {
}

class SentimentEs {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangEs,
  StemmerEs,
  StopwordsEs,
  TokenizerEs,
  NormalizerEs,
  SentimentEs,
}
