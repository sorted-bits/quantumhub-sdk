import { DeviceType } from '../../enums/device-type';
import { BaseAttribute } from './base-attribute';

export interface ButtonAttribute extends BaseAttribute {
  type: DeviceType.button;
}

export interface SceneAttribute extends BaseAttribute {
  type: DeviceType.scene;
}

// JSON Schema for Light MQTT Configuration
// https://www.home-assistant.io/integrations/light.mqtt/#json-schema---configuration
export interface LightAttribute extends BaseAttribute {
  type: DeviceType.light;

  // Flag that defines if the light works in optimistic mode.
  optimistic: boolean;

  // Flag that defines if light supports brightness when the rgb, rgbw, or rgbww color mode is supported.
  brightness?: boolean;

  // Defines the maximum brightness value (i.e., 100%) of the MQTT device.
  brightness_scale?: number;

  // Flag that defines if the light supports effects.
  effect?: boolean;

  // The list of effects the light supports.
  effect_list?: string[];

  // The duration, in seconds, of a “long” flash.
  flash_time_long?: number;

  // The duration, in seconds, of a “short” flash.
  flash_time_short?: number;

  // The maximum color temperature in mireds.
  max_mireds?: number;

  // The minimum color temperature in mireds.
  min_mireds?: number;

  // A list of color modes supported by the list. Possible color modes are onoff, brightness, color_temp, hs, xy, rgb, rgbw, rgbww, white. 
  // Note that if onoff or brightness are used, that must be the only value in the list.
  supported_color_modes?: string[];

  // Defines the maximum white level (i.e., 100%) of the MQTT device. This is used when setting the light to white mode.
  white_scale?: number;
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

  temperature_unit: 'C' | 'F';

  has_fanmode: boolean;
  has_swingmode: boolean;
  has_presetmode: boolean;
  has_humidity_control: boolean;
  has_mode_control: boolean;
  has_power_control: boolean;

  preset_modes?: string[];
  fan_modes?: string[];
  swing_modes?: string[];
  modes?: string[];
}

export type Attribute = BaseAttribute | SwitchAttribute | LightAttribute | NumberAttribute | SelectAttribute | ButtonAttribute | DeviceTrackerAttribute | SceneAttribute | ClimateAttribute;
