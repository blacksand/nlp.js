declare module '@nlpjs/lang-bert' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangBert {
    constructor(container?: any);

    public name: string
  }

  class TokenizerBert extends Tokenizer {
  }

  class StemmerBert extends Stemmer {
  }

  class StopwordsBert extends Stopwords {
  }

  class NormalizerBert extends Normalizer {
  }

  class SentimentBert {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangBert,
    StemmerBert,
    StopwordsBert,
    TokenizerBert,
    NormalizerBert,
    SentimentBert,
  }
}
