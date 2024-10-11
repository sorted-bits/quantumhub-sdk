import { DeviceType } from "../../enums/device-type";
import { BaseAttributeWithState } from "./base-attribute";

export interface ClimateState {
    current_temperature?: number;
    target_temperature?: number;
    current_humidity?: number;
    target_humidity?: number;
    swing_mode?: string;
    preset_mode?: string;
    mode?: string;
    fan_mode?: string;
    precision?: number;
    min_temp?: number;
    max_temp?: number;
    temp_step?: number;
    max_humidity?: number;
    min_humidity?: number;
}

export interface ClimateAttribute extends BaseAttributeWithState {
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

    stateDefinition: ClimateState;
}