declare class Logger {
  debug(...args: any[]): void;

  info(...args: any[]): void;

  warn(...args: any[]): void;

  error(...args: any[]): void;

  log(...args: any[]): void;

  trace(...args: any[]): void;

  fatal(...args: any[]): void;
}

declare const logger: Logger

export { logger }
