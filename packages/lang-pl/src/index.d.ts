declare module '@nlpjs/lang-pl' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangPl {
    constructor(container?: any);

    public name: string
  }

  class TokenizerPl extends Tokenizer {
  }

  class StemmerPl extends Stemmer {
  }

  class StopwordsPl extends Stopwords {
  }

  class NormalizerPl extends Normalizer {
  }

  class SentimentPl {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangPl,
    StemmerPl,
    StopwordsPl,
    TokenizerPl,
    NormalizerPl,
    SentimentPl,
  }
}
