declare module '@nlpjs/lang-hi' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangHi {
    constructor(container?: any);

    public name: string
  }

  class TokenizerHi extends Tokenizer {
  }

  class StemmerHi extends Stemmer {
  }

  class StopwordsHi extends Stopwords {
  }

  class NormalizerHi extends Normalizer {
  }

  class SentimentHi {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangHi,
    StemmerHi,
    StopwordsHi,
    TokenizerHi,
    NormalizerHi,
    SentimentHi,
  }
}
