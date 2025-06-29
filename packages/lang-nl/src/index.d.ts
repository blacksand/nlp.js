declare module '@nlpjs/lang-nl' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangNl {
    constructor(container?: any);

    public name: string
  }

  class TokenizerNl extends Tokenizer {
  }

  class StemmerNl extends Stemmer {
  }

  class StopwordsNl extends Stopwords {
  }

  class NormalizerNl extends Normalizer {
  }

  class SentimentNl {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangNl,
    StemmerNl,
    StopwordsNl,
    TokenizerNl,
    NormalizerNl,
    SentimentNl,
  }
}
