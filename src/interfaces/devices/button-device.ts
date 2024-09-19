import { ButtonAttribute } from '../attributes/device-attributes';
import { BaseDevice } from './base-device';

export interface ButtonDevice extends BaseDevice {
  onButtonPressed?(attribute: ButtonAttribute): Promise<void>;
}
