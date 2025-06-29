declare module '@nlpjs/similarity-wa' {
  function leven(a: string, b: string): number;

  function similarity(a: string, b: string): number;

  class SpellCheck {
    constructor(settings?: any);

    public getCorrections(text: string): string[];
  }

  export {
    leven,
    similarity,
    SpellCheck,
  }
}
