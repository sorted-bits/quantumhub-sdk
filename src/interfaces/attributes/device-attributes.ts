import { DeviceType } from '../../enums/device-type';
import { BaseAttribute } from './base-attribute';

export interface ButtonAttribute extends BaseAttribute {
  type: DeviceType.button;
}

export interface SceneAttribute extends BaseAttribute {
  type: DeviceType.scene;
}

export interface DeviceAutomationAttribute extends BaseAttribute {
  type: DeviceType.device_automation;
  payload: string;
}

export interface DeviceTrackerAttribute extends BaseAttribute {
  type: DeviceType.device_tracker;
  source_type?: 'gps' | 'router' | 'bluetooth' | 'bluetooth_le';
}

export interface SwitchAttribute extends BaseAttribute {
  type: DeviceType.switch;
  optimistic: boolean;
}

export interface NumberAttribute extends BaseAttribute {
  type: DeviceType.number;
  min: number;
  max: number;
  step: number;
}

export interface SelectAttribute extends BaseAttribute {
  type: DeviceType.select;
  optimistic: boolean;
  options: string[];
}

export interface ClimateAttribute extends BaseAttribute {
  type: DeviceType.climate;
  optimistic: boolean;
  has_fanmode: boolean;
  has_swingmode: boolean;
  has_presetmode: boolean;
  has_humidity_control: boolean;
}

export type Attribute = BaseAttribute | SwitchAttribute | DeviceAutomationAttribute | NumberAttribute | SelectAttribute | ButtonAttribute | DeviceTrackerAttribute | SceneAttribute | ClimateAttribute;
