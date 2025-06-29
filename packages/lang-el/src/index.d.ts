declare module '@nlpjs/lang-el' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangEl {
    constructor(container?: any);

    public name: string
  }

  class TokenizerEl extends Tokenizer {
  }

  class StemmerEl extends Stemmer {
  }

  class StopwordsEl extends Stopwords {
  }

  class NormalizerEl extends Normalizer {
  }

  class SentimentEl {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangEl,
    StemmerEl,
    StopwordsEl,
    TokenizerEl,
    NormalizerEl,
    SentimentEl,
  }
}
