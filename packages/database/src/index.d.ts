import { Clonable, Container } from '@nlpjs/core'

class Collection {
  public name: string
  public documents: any[]

  constructor(name: string, adapter?: any);

  public find(query?: any): any[];

  public findOne(query: any): any;

  public insert(doc: any): any;

  public update(query: any, doc: any): any;

  public remove(query: any): any;
}

class Database extends Clonable {
  public collections: { [name: string]: Collection }

  constructor(settings?: any, container?: Container);

  public getCollection(name: string): Collection;
}

class MemorydbAdapter {
  public collections: { [name: string]: any[] }

  constructor();

  public getCollection(name: string): any[];
}

export {
  Database,
  Collection,
  MemorydbAdapter,
}
