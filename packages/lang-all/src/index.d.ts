import { Container } from '@nlpjs/core'
import { LangAr, NormalizerAr, SentimentAr, StemmerAr, StopwordsAr, TokenizerAr } from '@nlpjs/lang-ar'
import { LangBn, NormalizerBn, SentimentBn, StemmerBn, StopwordsBn, TokenizerBn } from '@nlpjs/lang-bn'
import { LangCa, NormalizerCa, SentimentCa, StemmerCa, StopwordsCa, TokenizerCa } from '@nlpjs/lang-ca'
import { LangCs, NormalizerCs, SentimentCs, StemmerCs, StopwordsCs, TokenizerCs } from '@nlpjs/lang-cs'
import { LangDa, NormalizerDa, SentimentDa, StemmerDa, StopwordsDa, TokenizerDa } from '@nlpjs/lang-da'
import { LangDe, NormalizerDe, SentimentDe, StemmerDe, StopwordsDe, TokenizerDe } from '@nlpjs/lang-de'
import { LangEl, NormalizerEl, SentimentEl, StemmerEl, StopwordsEl, TokenizerEl } from '@nlpjs/lang-el'
import { LangEn, NormalizerEn, SentimentEn, StemmerEn, StopwordsEn, TokenizerEn } from '@nlpjs/lang-en'
import { LangEs, NormalizerEs, SentimentEs, StemmerEs, StopwordsEs, TokenizerEs } from '@nlpjs/lang-es'
import { LangEu, NormalizerEu, SentimentEu, StemmerEu, StopwordsEu, TokenizerEu } from '@nlpjs/lang-eu'
import { LangFa, NormalizerFa, SentimentFa, StemmerFa, StopwordsFa, TokenizerFa } from '@nlpjs/lang-fa'
import { LangFi, NormalizerFi, SentimentFi, StemmerFi, StopwordsFi, TokenizerFi } from '@nlpjs/lang-fi'
import { LangFr, NormalizerFr, SentimentFr, StemmerFr, StopwordsFr, TokenizerFr } from '@nlpjs/lang-fr'
import { LangGa, NormalizerGa, SentimentGa, StemmerGa, StopwordsGa, TokenizerGa } from '@nlpjs/lang-ga'
import { LangGl, NormalizerGl, SentimentGl, StemmerGl, StopwordsGl, TokenizerGl } from '@nlpjs/lang-gl'
import { LangHi, NormalizerHi, SentimentHi, StemmerHi, StopwordsHi, TokenizerHi } from '@nlpjs/lang-hi'
import { LangHu, NormalizerHu, SentimentHu, StemmerHu, StopwordsHu, TokenizerHu } from '@nlpjs/lang-hu'
import { LangHy, NormalizerHy, SentimentHy, StemmerHy, StopwordsHy, TokenizerHy } from '@nlpjs/lang-hy'
import { LangId, NormalizerId, SentimentId, StemmerId, StopwordsId, TokenizerId } from '@nlpjs/lang-id'
import { LangIt, NormalizerIt, SentimentIt, StemmerIt, StopwordsIt, TokenizerIt } from '@nlpjs/lang-it'
import { LangJa, NormalizerJa, SentimentJa, StemmerJa, StopwordsJa, TokenizerJa } from '@nlpjs/lang-ja'
import { LangKo, NormalizerKo, SentimentKo, StemmerKo, StopwordsKo, TokenizerKo } from '@nlpjs/lang-ko'
import { LangLt, NormalizerLt, SentimentLt, StemmerLt, StopwordsLt, TokenizerLt } from '@nlpjs/lang-lt'
import { LangMs, NormalizerMs, SentimentMs, StemmerMs, StopwordsMs, TokenizerMs } from '@nlpjs/lang-ms'
import { LangNe, NormalizerNe, SentimentNe, StemmerNe, StopwordsNe, TokenizerNe } from '@nlpjs/lang-ne'
import { LangNl, NormalizerNl, SentimentNl, StemmerNl, StopwordsNl, TokenizerNl } from '@nlpjs/lang-nl'
import { LangNo, NormalizerNo, SentimentNo, StemmerNo, StopwordsNo, TokenizerNo } from '@nlpjs/lang-no'
import { LangPl, NormalizerPl, SentimentPl, StemmerPl, StopwordsPl, TokenizerPl } from '@nlpjs/lang-pl'
import { LangPt, NormalizerPt, SentimentPt, StemmerPt, StopwordsPt, TokenizerPt } from '@nlpjs/lang-pt'
import { LangRo, NormalizerRo, SentimentRo, StemmerRo, StopwordsRo, TokenizerRo } from '@nlpjs/lang-ro'
import { LangRu, NormalizerRu, SentimentRu, StemmerRu, StopwordsRu, TokenizerRu } from '@nlpjs/lang-ru'
import { LangSl, NormalizerSl, SentimentSl, StemmerSl, StopwordsSl, TokenizerSl } from '@nlpjs/lang-sl'
import { LangSr, NormalizerSr, SentimentSr, StemmerSr, StopwordsSr, TokenizerSr } from '@nlpjs/lang-sr'
import { LangSv, NormalizerSv, SentimentSv, StemmerSv, StopwordsSv, TokenizerSv } from '@nlpjs/lang-sv'
import { LangTa, NormalizerTa, SentimentTa, StemmerTa, StopwordsTa, TokenizerTa } from '@nlpjs/lang-ta'
import { LangTh, NormalizerTh, SentimentTh, StemmerTh, StopwordsTh, TokenizerTh } from '@nlpjs/lang-th'
import { LangTl, NormalizerTl, SentimentTl, StemmerTl, StopwordsTl, TokenizerTl } from '@nlpjs/lang-tl'
import { LangTr, NormalizerTr, SentimentTr, StemmerTr, StopwordsTr, TokenizerTr } from '@nlpjs/lang-tr'
import { LangUk, NormalizerUk, SentimentUk, StemmerUk, StopwordsUk, TokenizerUk } from '@nlpjs/lang-uk'
import { LangZh, NormalizerZh, SentimentZh, StemmerZh, StopwordsZh, TokenizerZh } from '@nlpjs/lang-zh'

export class LangAll {
  register(container: Container): void;
}

export {
  LangAr, NormalizerAr, SentimentAr, StemmerAr, StopwordsAr, TokenizerAr,
  LangBn, NormalizerBn, SentimentBn, StemmerBn, StopwordsBn, TokenizerBn,
  LangCa, NormalizerCa, SentimentCa, StemmerCa, StopwordsCa, TokenizerCa,
  LangCs, NormalizerCs, SentimentCs, StemmerCs, StopwordsCs, TokenizerCs,
  LangDa, NormalizerDa, SentimentDa, StemmerDa, StopwordsDa, TokenizerDa,
  LangDe, NormalizerDe, SentimentDe, StemmerDe, StopwordsDe, TokenizerDe,
  LangEl, NormalizerEl, SentimentEl, StemmerEl, StopwordsEl, TokenizerEl,
  LangEn, NormalizerEn, SentimentEn, StemmerEn, StopwordsEn, TokenizerEn,
  LangEs, NormalizerEs, SentimentEs, StemmerEs, StopwordsEs, TokenizerEs,
  LangEu, NormalizerEu, SentimentEu, StemmerEu, StopwordsEu, TokenizerEu,
  LangFa, NormalizerFa, SentimentFa, StemmerFa, StopwordsFa, TokenizerFa,
  LangFi, NormalizerFi, SentimentFi, StemmerFi, StopwordsFi, TokenizerFi,
  LangFr, NormalizerFr, SentimentFr, StemmerFr, StopwordsFr, TokenizerFr,
  LangGa, NormalizerGa, SentimentGa, StemmerGa, StopwordsGa, TokenizerGa,
  LangGl, NormalizerGl, SentimentGl, StemmerGl, StopwordsGl, TokenizerGl,
  LangHi, NormalizerHi, SentimentHi, StemmerHi, StopwordsHi, TokenizerHi,
  LangHu, NormalizerHu, SentimentHu, StemmerHu, StopwordsHu, TokenizerHu,
  LangHy, NormalizerHy, SentimentHy, StemmerHy, StopwordsHy, TokenizerHy,
  LangId, NormalizerId, SentimentId, StemmerId, StopwordsId, TokenizerId,
  LangIt, NormalizerIt, SentimentIt, StemmerIt, StopwordsIt, TokenizerIt,
  LangJa, NormalizerJa, SentimentJa, StemmerJa, StopwordsJa, TokenizerJa,
  LangKo, NormalizerKo, SentimentKo, StemmerKo, StopwordsKo, TokenizerKo,
  LangLt, NormalizerLt, SentimentLt, StemmerLt, StopwordsLt, TokenizerLt,
  LangMs, NormalizerMs, SentimentMs, StemmerMs, StopwordsMs, TokenizerMs,
  LangNe, NormalizerNe, SentimentNe, StemmerNe, StopwordsNe, TokenizerNe,
  LangNl, NormalizerNl, SentimentNl, StemmerNl, StopwordsNl, TokenizerNl,
  LangNo, NormalizerNo, SentimentNo, StemmerNo, StopwordsNo, TokenizerNo,
  LangPl, NormalizerPl, SentimentPl, StemmerPl, StopwordsPl, TokenizerPl,
  LangPt, NormalizerPt, SentimentPt, StemmerPt, StopwordsPt, TokenizerPt,
  LangRo, NormalizerRo, SentimentRo, StemmerRo, StopwordsRo, TokenizerRo,
  LangRu, NormalizerRu, SentimentRu, StemmerRu, StopwordsRu, TokenizerRu,
  LangSl, NormalizerSl, SentimentSl, StemmerSl, StopwordsSl, TokenizerSl,
  LangSr, NormalizerSr, SentimentSr, StemmerSr, StopwordsSr, TokenizerSr,
  LangSv, NormalizerSv, SentimentSv, StemmerSv, StopwordsSv, TokenizerSv,
  LangTa, NormalizerTa, SentimentTa, StemmerTa, StopwordsTa, TokenizerTa,
  LangTh, NormalizerTh, SentimentTh, StemmerTh, StopwordsTh, TokenizerTh,
  LangTl, NormalizerTl, SentimentTl, StemmerTl, StopwordsTl, TokenizerTl,
  LangTr, NormalizerTr, SentimentTr, StemmerTr, StopwordsTr, TokenizerTr,
  LangUk, NormalizerUk, SentimentUk, StemmerUk, StopwordsUk, TokenizerUk,
  LangZh, NormalizerZh, SentimentZh, StemmerZh, StopwordsZh, TokenizerZh,
}

export const langDict: { [key: string]: string }

export function getNormalizer(inputLanguage?: string): any;

export function getTokenizer(inputLanguage?: string): any;

export function getStemmer(inputLanguage?: string): any;

export function getStopwords(inputLanguage?: string): any;

export function getSentiment(inputLanguage?: string): any;

export function normalize(text: string, locale?: string): string;

export function tokenize(text: string, locale?: string, shouldNormalize?: boolean): string[];

export function stem(text: string | string[], locale?: string): string[];

export function removeStopwords(tokens: string[], locale?: string): string[];

export function dict(sentences: string[], locale?: string, useStemmer?: boolean): {
  locale: string;
  useStemmer: boolean;
  freqs: { [key: string]: number };
  positions: { [key: string]: number };
  keys: string[];
  length: number;
};

export function bow(sentence: string, voc: {
  locale: string;
  useStemmer: boolean;
  freqs: { [key: string]: number };
  positions: { [key: string]: number };
  keys: string[];
  length: number;
}): number[];
