declare module '@nlpjs/lang-gl' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangGl {
    constructor(container?: any);

    public name: string
  }

  class TokenizerGl extends Tokenizer {
  }

  class StemmerGl extends Stemmer {
  }

  class StopwordsGl extends Stopwords {
  }

  class NormalizerGl extends Normalizer {
  }

  class SentimentGl {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangGl,
    StemmerGl,
    StopwordsGl,
    TokenizerGl,
    NormalizerGl,
    SentimentGl,
  }
}
