declare module '@nlpjs/lang-tl' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangTl {
    constructor(container?: any);

    public name: string
  }

  class TokenizerTl extends Tokenizer {
  }

  class StemmerTl extends Stemmer {
  }

  class StopwordsTl extends Stopwords {
  }

  class NormalizerTl extends Normalizer {
  }

  class SentimentTl {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangTl,
    StemmerTl,
    StopwordsTl,
    TokenizerTl,
    NormalizerTl,
    SentimentTl,
  }
}
