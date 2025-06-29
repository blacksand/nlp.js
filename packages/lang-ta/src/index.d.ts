declare module '@nlpjs/lang-ta' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangTa {
    constructor(container?: any);

    public name: string
  }

  class TokenizerTa extends Tokenizer {
  }

  class StemmerTa extends Stemmer {
  }

  class StopwordsTa extends Stopwords {
  }

  class NormalizerTa extends Normalizer {
  }

  class SentimentTa {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangTa,
    StemmerTa,
    StopwordsTa,
    TokenizerTa,
    NormalizerTa,
    SentimentTa,
  }
}
