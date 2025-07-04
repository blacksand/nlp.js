import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

class LangRu {
  public name: string

  constructor(container?: any);
}

class TokenizerRu extends Tokenizer {
}

class StemmerRu extends Stemmer {
}

class StopwordsRu extends Stopwords {
}

class NormalizerRu extends Normalizer {
}

class SentimentRu {
  constructor(settings?: any);

  public getSentiment(text: string): any;
}

export {
  LangRu,
  StemmerRu,
  StopwordsRu,
  TokenizerRu,
  NormalizerRu,
  SentimentRu,
}

