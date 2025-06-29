declare module '@nlpjs/lang-ca' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangCa {
    constructor(container?: any);

    public name: string
  }

  class TokenizerCa extends Tokenizer {
  }

  class StemmerCa extends Stemmer {
  }

  class StopwordsCa extends Stopwords {
  }

  class NormalizerCa extends Normalizer {
  }

  class SentimentCa {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangCa,
    StemmerCa,
    StopwordsCa,
    TokenizerCa,
    NormalizerCa,
    SentimentCa,
  }
}
