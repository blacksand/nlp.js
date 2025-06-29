declare module '@nlpjs/lang-ne' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangNe {
    constructor(container?: any);

    public name: string
  }

  class TokenizerNe extends Tokenizer {
  }

  class StemmerNe extends Stemmer {
  }

  class StopwordsNe extends Stopwords {
  }

  class NormalizerNe extends Normalizer {
  }

  class SentimentNe {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangNe,
    StemmerNe,
    StopwordsNe,
    TokenizerNe,
    NormalizerNe,
    SentimentNe,
  }
}
