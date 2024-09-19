import { NumberAttribute } from '../attributes/device-attributes';
import { BaseDevice } from './base-device';

export interface NumberDevice extends BaseDevice {
  state: number;
  onNumberChanged?(attribute: NumberAttribute, value: number): Promise<void>;
}
