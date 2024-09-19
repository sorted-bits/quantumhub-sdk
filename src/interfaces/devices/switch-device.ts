import { SwitchAttribute } from '../attributes/device-attributes';
import { BaseDevice } from './base-device';

export interface SwitchDevice extends BaseDevice {
  state: boolean;
  onSwitchChanged?(attribute: SwitchAttribute, value: boolean): Promise<void>;
}
