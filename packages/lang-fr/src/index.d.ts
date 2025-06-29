declare module '@nlpjs/lang-fr' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangFr {
    constructor(container?: any);

    public name: string
  }

  class TokenizerFr extends Tokenizer {
  }

  class StemmerFr extends Stemmer {
  }

  class StopwordsFr extends Stopwords {
  }

  class NormalizerFr extends Normalizer {
  }

  class SentimentFr {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangFr,
    StemmerFr,
    StopwordsFr,
    TokenizerFr,
    NormalizerFr,
    SentimentFr,
  }
}
