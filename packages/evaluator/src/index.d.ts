import type { Context } from '@nlpjs/core'

class Evaluator {
  constructor(settings?: any);

  evaluate(src: string, context: Context): any;

  addSource(name: string, src: string): void;

  compile(src: string, context: any): any;
}

function compile(src: string, context: any): any;

class Template {
  constructor(settings?: any);

  compile(src: string, context: any): any;
}

class JavascriptCompiler {
  constructor(settings?: any);

  compile(src: string, context: any): any;
}

export {
  Evaluator,
  compile,
  Template,
  JavascriptCompiler,
}
