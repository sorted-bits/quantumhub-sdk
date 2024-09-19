import { Attribute } from '../attributes/device-attributes';
import { Provider } from '../provider';

export interface BaseDevice {
  init(provider: Provider): Promise<boolean>;
  start(): Promise<void>;
  stop(): Promise<void>;
  destroy(): Promise<void>;

  onMessage?(topic: string, message: Buffer): Promise<void>;
  valueChanged(attribute: Attribute, value: any): Promise<void>;
}
