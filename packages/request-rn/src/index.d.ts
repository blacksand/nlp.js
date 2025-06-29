declare module '@nlpjs/request-rn' {
  function request(url: string, options?: any): Promise<any>;

  const fs: any

  export {
    request,
    fs,
  }
}
