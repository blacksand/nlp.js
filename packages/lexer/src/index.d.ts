declare class Token {
  constructor(value: string, type: number);
}

declare class Lexer {
  static TokenType: {
    Identifier: number;
    Number: number;
    String: number;
    Operator: number;
    Separator: number;
    EndOfLine: number;
    Assignment: number;
    EndOfFile: number;
  }

  constructor(settings?: {
    operators?: string[];
    assignments?: string[];
    separators?: string[];
  });

  init(text?: string): void;

  clearText(text: string): string;

  isEndOfLine(ch: string): boolean;

  isSeparator(ch: string): boolean;

  isSpace(ch: string): boolean;

  isAssignment(ch: string): boolean;

  isAlpha(ch: string): boolean;

  isNumeric(ch: string): boolean;

  isNameCharacter(ch: string, first?: boolean): boolean;

  isOperator(ch: string): boolean;

  nextByCondition(initial: string, condition: (ch: string) => boolean): string;

  nextName(letter: string): Token | undefined;

  nextString(quote: string): Token | undefined;

  nextNumber(digit: string): Token | undefined;

  nextSeparator(ch: string): Token | undefined;

  nextOperatorOrAssignment(ch: string, firstCall?: boolean): Token | undefined;

  goBack(): void;

  nextChar(): string | undefined;

  skipSpaces(): void;

  nextFirstChar(): string | undefined;

  nextToken(): Token;

  pushToken(token: Token): void;

  getIndent(): number;
}

export { Lexer }
