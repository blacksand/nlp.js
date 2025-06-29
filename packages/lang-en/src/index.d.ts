import { Container } from '@nlpjs/core'
import { NormalizerEn, StemmerEn, StopwordsEn, TokenizerEn } from '@nlpjs/lang-en-min'

export class LangEn {
  register(container: Container): void;
}

export class SentimentEn {
  senticon: { [key: string]: number }
  negations: string[]
  stemmed: boolean
}

export {
  TokenizerEn, StemmerEn, StopwordsEn, NormalizerEn,
}
