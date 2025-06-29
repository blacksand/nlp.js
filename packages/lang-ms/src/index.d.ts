declare module '@nlpjs/lang-ms' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangMs {
    constructor(container?: any);

    public name: string
  }

  class TokenizerMs extends Tokenizer {
  }

  class StemmerMs extends Stemmer {
  }

  class StopwordsMs extends Stopwords {
  }

  class NormalizerMs extends Normalizer {
  }

  class SentimentMs {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangMs,
    StemmerMs,
    StopwordsMs,
    TokenizerMs,
    NormalizerMs,
    SentimentMs,
  }
}
