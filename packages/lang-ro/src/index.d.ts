declare module '@nlpjs/lang-ro' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangRo {
    constructor(container?: any);

    public name: string
  }

  class TokenizerRo extends Tokenizer {
  }

  class StemmerRo extends Stemmer {
  }

  class StopwordsRo extends Stopwords {
  }

  class NormalizerRo extends Normalizer {
  }

  class SentimentRo {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangRo,
    StemmerRo,
    StopwordsRo,
    TokenizerRo,
    NormalizerRo,
    SentimentRo,
  }
}
