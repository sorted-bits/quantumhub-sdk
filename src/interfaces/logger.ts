export interface Logger {
    info(message?: any, ...messages: any[]): void;
    error(message?: any, ...messages: any[]): void;
}