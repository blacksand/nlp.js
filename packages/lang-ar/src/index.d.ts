declare module '@nlpjs/lang-ar' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangAr {
    constructor(container?: any);

    public name: string
  }

  class TokenizerAr extends Tokenizer {
  }

  class StemmerAr extends Stemmer {
  }

  class StopwordsAr extends Stopwords {
  }

  class NormalizerAr extends Normalizer {
  }

  class SentimentAr {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangAr,
    StemmerAr,
    StopwordsAr,
    TokenizerAr,
    NormalizerAr,
    SentimentAr,
  }
}
