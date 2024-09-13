import { Logger } from './logger';
import { Provider } from './provider';

export interface Device {
  init(provider: Provider, logger: Logger): Promise<boolean>;
  start(): Promise<void>;
  stop(): Promise<void>;
  destroy(): Promise<void>;

  valueChanged(attribute: string, value: any): Promise<void>;
  onMessage(topic: string, message: Buffer): Promise<void>;
}
