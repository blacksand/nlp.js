declare module '@nlpjs/lang-fi' {
  import { Normalizer, Stemmer, Stopwords, Tokenizer } from '@nlpjs/core'

  class LangFi {
    constructor(container?: any);

    public name: string
  }

  class TokenizerFi extends Tokenizer {
  }

  class StemmerFi extends Stemmer {
  }

  class StopwordsFi extends Stopwords {
  }

  class NormalizerFi extends Normalizer {
  }

  class SentimentFi {
    constructor(settings?: any);

    public getSentiment(text: string): any;
  }

  export {
    LangFi,
    StemmerFi,
    StopwordsFi,
    TokenizerFi,
    NormalizerFi,
    SentimentFi,
  }
}
