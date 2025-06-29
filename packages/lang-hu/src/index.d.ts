declare module '@nlpjs/lang-hu' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangHu {
    constructor(container?: any);

    public name: string
  }

  class TokenizerHu extends Tokenizer {
  }

  class StemmerHu extends Stemmer {
  }

  class StopwordsHu extends Stopwords {
  }

  class NormalizerHu extends Normalizer {
  }

  class SentimentHu {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangHu,
    StemmerHu,
    StopwordsHu,
    TokenizerHu,
    NormalizerHu,
    SentimentHu,
  }
}
