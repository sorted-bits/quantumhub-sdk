export interface Logger {
  trace(message?: any, ...messages: any[]): void;
  debug(message?: any, ...messages: any[]): void;
  info(message?: any, ...messages: any[]): void;
  warn(message?: any, ...messages: any[]): void;
  fatal(message?: any, ...messages: any[]): void;
}
