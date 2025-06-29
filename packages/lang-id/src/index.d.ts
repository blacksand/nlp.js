declare module '@nlpjs/lang-id' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangId {
    constructor(container?: any);

    public name: string
  }

  class TokenizerId extends Tokenizer {
  }

  class StemmerId extends Stemmer {
  }

  class StopwordsId extends Stopwords {
  }

  class NormalizerId extends Normalizer {
  }

  class SentimentId {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangId,
    StemmerId,
    StopwordsId,
    TokenizerId,
    NormalizerId,
    SentimentId,
  }
}
