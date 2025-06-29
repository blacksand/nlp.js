declare module '@nlpjs/mongodb-adapter' {
  class MongodbAdapter {
    constructor(settings?: any);

    public connect(): Promise<void>;

    public disconnect(): Promise<void>;

    public getCollection(name: string): any;
  }

  export {
    MongodbAdapter,
  }
}
