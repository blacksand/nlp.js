import { Container } from '@nlpjs/core'
import { NormalizerEn, StemmerEn, StopwordsEn, TokenizerEn } from '@nlpjs/lang-en-min'

class LangEn {
  register(container: Container): void;
}

class SentimentEn {
  senticon: { [key: string]: number }
  negations: string[]
  stemmed: boolean
}

export {
  LangEn,
  NormalizerEn,
  SentimentEn,
  StemmerEn,
  StopwordsEn,
  TokenizerEn,
}
