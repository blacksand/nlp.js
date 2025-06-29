declare module '@nlpjs/lang-eu' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangEu {
    constructor(container?: any);

    public name: string
  }

  class TokenizerEu extends Tokenizer {
  }

  class StemmerEu extends Stemmer {
  }

  class StopwordsEu extends Stopwords {
  }

  class NormalizerEu extends Normalizer {
  }

  class SentimentEu {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangEu,
    StemmerEu,
    StopwordsEu,
    TokenizerEu,
    NormalizerEu,
    SentimentEu,
  }
}
