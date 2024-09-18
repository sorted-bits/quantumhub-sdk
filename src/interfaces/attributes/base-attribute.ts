import { DeviceClass } from '../../enums/device-class';
import { DeviceType } from '../../enums/device-type';

export interface BaseAttribute {
  key: string;
  type: DeviceType;
  name: string;
  device_class: DeviceClass;
  unit_of_measurement?: string;
  state_class?: string;
}
