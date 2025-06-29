declare module '@nlpjs/lang-bn' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangBn {
    constructor(container?: any);

    public name: string
  }

  class TokenizerBn extends Tokenizer {
  }

  class StemmerBn extends Stemmer {
  }

  class StopwordsBn extends Stopwords {
  }

  class NormalizerBn extends Normalizer {
  }

  class SentimentBn {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangBn,
    StemmerBn,
    StopwordsBn,
    TokenizerBn,
    NormalizerBn,
    SentimentBn,
  }
}
