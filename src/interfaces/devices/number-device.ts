import { NumberAttribute } from '../attributes/device-attributes';
import { BaseDevice } from './base-device';

export interface NumberDevice extends BaseDevice {
  onNumberChanged?(attribute: NumberAttribute, value: number): Promise<void>;
}
