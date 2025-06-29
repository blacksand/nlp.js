declare module '@nlpjs/request' {
  function request(url: string, options?: any): Promise<any>;

  const fs: any

  export {
    request,
    fs,
  }
}
