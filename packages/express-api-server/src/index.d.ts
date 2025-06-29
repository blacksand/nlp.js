declare module '@nlpjs/express-api-server' {
  import { Container } from '@nlpjs/core'
  import { Application } from 'express'

  class ExpressApiApp {
    constructor(settings?: any, container?: Container);

    public start(): Promise<void>;

    public stop(): Promise<void>;

    public getApp(): Application;
  }

  class ExpressApiServer {
    constructor(settings?: any, container?: Container);

    public start(): Promise<void>;

    public stop(): Promise<void>;
  }

  export {
    ExpressApiApp,
    ExpressApiServer,
  }
}
