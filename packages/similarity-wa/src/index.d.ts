export function leven(a: string, b: string): number;

export function similarity(a: string, b: string): number;

export class SpellCheck {
  constructor(settings?: any);

  public getCorrections(text: string): string[];
}
