import { Container } from '@nlpjs/core';
import {
  TokenizerEn, StemmerEn, StopwordsEn, NormalizerEn,
} from '@nlpjs/lang-en-min';

export class LangEn {
  register(container: Container): void;
}

export const SentimentEn: {
  senticon: { [key: string]: number };
  negations: string[];
  stemmed: boolean;
};

export {
  TokenizerEn, StemmerEn, StopwordsEn, NormalizerEn,
};
