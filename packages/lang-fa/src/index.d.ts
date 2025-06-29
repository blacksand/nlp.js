declare module '@nlpjs/lang-fa' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangFa {
    constructor(container?: any);

    public name: string
  }

  class TokenizerFa extends Tokenizer {
  }

  class StemmerFa extends Stemmer {
  }

  class StopwordsFa extends Stopwords {
  }

  class NormalizerFa extends Normalizer {
  }

  class SentimentFa {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangFa,
    StemmerFa,
    StopwordsFa,
    TokenizerFa,
    NormalizerFa,
    SentimentFa,
  }
}
