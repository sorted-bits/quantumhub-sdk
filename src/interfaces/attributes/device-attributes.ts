import { DeviceType } from '../../enums/device-type';
import { BaseAttribute } from './base-attribute';

export interface ButtonAttribute extends BaseAttribute {
  type: DeviceType.button;
  payload_press: string;
}

export interface SceneAttribute extends BaseAttribute {
  type: DeviceType.scene;
  payload_on: string;
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
  payload_on: string;
  payload_off: string;
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
  fan_modes: string[];
  max_humidity: number;
  min_humidity: number;
  max_temp: number;
  min_temp: number;
  modes: string[];
  precision: number;
  swing_modes: string[];
  temperature_unit: string;
  temp_step: number;
  payload_on: string;
  payload_off: string;
  preset_modes: string[];
}

export type Attribute = BaseAttribute | SwitchAttribute | DeviceAutomationAttribute | NumberAttribute | SelectAttribute | ButtonAttribute | DeviceTrackerAttribute | SceneAttribute;
