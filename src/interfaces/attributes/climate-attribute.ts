import { DeviceType } from "../../enums/device-type";
import { BaseAttribute } from "./base-attribute";

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