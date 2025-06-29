declare module '@nlpjs/lang-de' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangDe {
    constructor(container?: any);

    public name: string
  }

  class TokenizerDe extends Tokenizer {
  }

  class StemmerDe extends Stemmer {
  }

  class StopwordsDe extends Stopwords {
  }

  class NormalizerDe extends Normalizer {
  }

  class SentimentDe {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangDe,
    StemmerDe,
    StopwordsDe,
    TokenizerDe,
    NormalizerDe,
    SentimentDe,
  }
}
