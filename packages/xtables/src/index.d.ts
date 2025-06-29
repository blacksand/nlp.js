declare module '@nlpjs/xtables' {
  class XTable {
    public headers: string[]
    public data: any[][]

    constructor(settings?: any);

    public load(fileName: string): Promise<void>;
  }

  class XDoc {
    public tables: XTable[]

    constructor(settings?: any);

    public load(fileName: string): Promise<void>;
  }

  class XTableUtils {
    static excel2json(fileName: string): any[];
  }

  export {
    XTable,
    XDoc,
    XTableUtils,
  }
}
