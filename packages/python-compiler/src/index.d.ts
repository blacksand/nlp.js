declare module '@nlpjs/python-compiler' {
  import { Clonable, Container } from '@nlpjs/core'

  class PythonParser extends Clonable {
    constructor(settings?: any, container?: Container);

    public parse(code: string): any;
  }

  class PythonCompiler extends Clonable {
    constructor(settings?: any, container?: Container);

    public compile(code: string): string;
  }

  function executePython(code: string, context: any): Promise<any>;

  export {
    PythonParser,
    PythonCompiler,
    executePython,
  }
}
