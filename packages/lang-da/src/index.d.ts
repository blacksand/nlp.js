declare module '@nlpjs/lang-da' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangDa {
    constructor(container?: any);

    public name: string
  }

  class TokenizerDa extends Tokenizer {
  }

  class StemmerDa extends Stemmer {
  }

  class StopwordsDa extends Stopwords {
  }

  class NormalizerDa extends Normalizer {
  }

  class SentimentDa {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangDa,
    StemmerDa,
    StopwordsDa,
    TokenizerDa,
    NormalizerDa,
    SentimentDa,
  }
}
