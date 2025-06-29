declare module '@nlpjs/lang-sl' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangSl {
    constructor(container?: any);

    public name: string
  }

  class TokenizerSl extends Tokenizer {
  }

  class StemmerSl extends Stemmer {
  }

  class StopwordsSl extends Stopwords {
  }

  class NormalizerSl extends Normalizer {
  }

  class SentimentSl {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangSl,
    StemmerSl,
    StopwordsSl,
    TokenizerSl,
    NormalizerSl,
    SentimentSl,
  }
}
