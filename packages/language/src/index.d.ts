declare module '@nlpjs/language' {
  interface IGuess {
    alpha3: string;
    alpha2: string;
    language: string;
    score: number;
  }

  class Language {
    public threshold: number

    public constructor(settings?: any);

    public guess(text: string, whitelist?: string[], limit?: number): IGuess[];

    public getBest(text: string, whitelist?: string[]): IGuess;
  }

  export {
    Language,
    IGuess,
  }
}
