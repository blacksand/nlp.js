declare module '@nlpjs/lang-en-min' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangEn {
    constructor(container?: any);

    public name: string
  }

  class TokenizerEn extends Tokenizer {
  }

  class StemmerEn extends Stemmer {
  }

  class StopwordsEn extends Stopwords {
  }

  class NormalizerEn extends Normalizer {
  }

  class SentimentEn {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  function registerTrigrams(container: any): void;

  export {
    LangEn,
    StemmerEn,
    StopwordsEn,
    TokenizerEn,
    NormalizerEn,
    SentimentEn,
    registerTrigrams,
  }
}
