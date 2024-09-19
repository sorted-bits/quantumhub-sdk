import { ClimateAttribute } from '../attributes/device-attributes';
import { BaseDevice } from './base-device';

export interface ClimateDevice extends BaseDevice {
  /* Humidity */
  currentHumidity?: number;
  targetHumidity?: number;
  minHumidity?: number;
  maxHumidity?: number;

  /* Temperature */
  maxTemp?: number;
  minTemp?: number;
  currentTemperature?: number;
  targetTemperature?: number;
  temperatureLow?: number;
  temperatureHigh?: number;
  temperatureUnit?: string; // Default: 'C'
  tempStep?: number; // Default: 1.0

  fanModes?: string[]; // Default: [“auto”, “low”, “medium”, “high”]
  fanMode?: string;

  modes?: string[]; // Default: [“auto”, “off”, “cool”, “heat”, “dry”, “fan_only”]
  mode?: string;

  precision?: number; // Default: 0.1 for Celsius and 1.0 for Fahrenheit.

  presetModes?: string[];
  presetMode?: string;

  swingModes?: string[]; // Default: ['off', 'on']
  swingMode?: string;

  /*
  hvacMode: string;
  climateMode: string;
  climatePresetMode: string;
  climateFanMode: string;
  climateSwingMode: string;
  power: boolean;
  */
  onHvacModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimateModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimatePresetModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimateFanModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimateSwingModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onPowerChanged?(attribute: ClimateAttribute, value: boolean): Promise<void>;
  onTargetTemperatureChanged?(attribute: ClimateAttribute, value: number): Promise<void>;
}
