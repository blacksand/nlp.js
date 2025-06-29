declare module '@nlpjs/lang-lt' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangLt {
    constructor(container?: any);

    public name: string
  }

  class TokenizerLt extends Tokenizer {
  }

  class StemmerLt extends Stemmer {
  }

  class StopwordsLt extends Stopwords {
  }

  class NormalizerLt extends Normalizer {
  }

  class SentimentLt {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangLt,
    StemmerLt,
    StopwordsLt,
    TokenizerLt,
    NormalizerLt,
    SentimentLt,
  }
}
