export class XTable {
  public headers: string[]
  public data: any[][]

  constructor(settings?: any);

  public load(fileName: string): Promise<void>;
}

export class XDoc {
  public tables: XTable[]

  constructor(settings?: any);

  public load(fileName: string): Promise<void>;
}

export class XTableUtils {
  static excel2json(fileName: string): any[];
}
