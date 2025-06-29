declare module '@nlpjs/lang-sv' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangSv {
    constructor(container?: any);

    public name: string
  }

  class TokenizerSv extends Tokenizer {
  }

  class StemmerSv extends Stemmer {
  }

  class StopwordsSv extends Stopwords {
  }

  class NormalizerSv extends Normalizer {
  }

  class SentimentSv {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangSv,
    StemmerSv,
    StopwordsSv,
    TokenizerSv,
    NormalizerSv,
    SentimentSv,
  }
}
