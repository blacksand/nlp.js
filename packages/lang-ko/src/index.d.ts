declare module '@nlpjs/lang-ko' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangKo {
    constructor(container?: any);

    public name: string
  }

  class TokenizerKo extends Tokenizer {
  }

  class StemmerKo extends Stemmer {
  }

  class StopwordsKo extends Stopwords {
  }

  class NormalizerKo extends Normalizer {
  }

  class SentimentKo {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangKo,
    StemmerKo,
    StopwordsKo,
    TokenizerKo,
    NormalizerKo,
    SentimentKo,
  }
}
