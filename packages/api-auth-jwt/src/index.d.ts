import { Container } from '@nlpjs/core'

class ApiAuthJwt {
  constructor(settings?: any, container?: Container);

  public start(): Promise<void>;
}

function configurePassport(settings?: any): any;

function ensureAuthenticated(): any;

export {
  ApiAuthJwt,
  configurePassport,
  ensureAuthenticated,
}
