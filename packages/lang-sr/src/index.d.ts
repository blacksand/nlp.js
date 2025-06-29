declare module '@nlpjs/lang-sr' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangSr {
    constructor(container?: any);

    public name: string
  }

  class TokenizerSr extends Tokenizer {
  }

  class StemmerSr extends Stemmer {
  }

  class StopwordsSr extends Stopwords {
  }

  class NormalizerSr extends Normalizer {
  }

  class SentimentSr {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangSr,
    StemmerSr,
    StopwordsSr,
    TokenizerSr,
    NormalizerSr,
    SentimentSr,
  }
}
