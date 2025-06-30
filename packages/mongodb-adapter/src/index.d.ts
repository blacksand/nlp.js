import { Clonable, Container } from '@nlpjs/core';

export class MongodbAdapter extends Clonable {
  constructor(settings?: any, container?: Container);

  public connect(): Promise<void>;

  public disconnect(): Promise<void>;

  public getCollection(name: string): any;

  public save(collection: string, data: any): Promise<any>;

  public findById(collection: string, id: string): Promise<any>;

  public find(collection: string, query?: any, limit?: number, offset?: number): Promise<any[]>;

  public remove(collection: string, condition: any): Promise<void>;
}
