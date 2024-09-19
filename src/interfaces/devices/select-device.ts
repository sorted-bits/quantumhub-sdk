import { SelectAttribute } from '../attributes/device-attributes';
import { BaseDevice } from './base-device';

export interface SelectDevice extends BaseDevice {
  state: string;
  onSelectChanged?(attribute: SelectAttribute, value: string): Promise<void>;
}
