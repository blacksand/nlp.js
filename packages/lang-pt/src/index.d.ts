import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangPt {
    constructor(container?: any);

    public name: string
  }

  class TokenizerPt extends Tokenizer {
  }

  class StemmerPt extends Stemmer {
  }

  class StopwordsPt extends Stopwords {
  }

  class NormalizerPt extends Normalizer {
  }

  class SentimentPt {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangPt,
    StemmerPt,
    StopwordsPt,
    TokenizerPt,
    NormalizerPt,
    SentimentPt,
  }

