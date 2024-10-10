import { ClimateAttribute } from "../attributes";
import { Device } from "./device";

export interface ClimateDevice extends Device {
    /* Climate methods */
    onClimateTargetTemperatureChanged(attribute: ClimateAttribute, value: number): Promise<void>;

    onClimateModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
    onClimatePresetModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
    onClimateFanModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
    onClimateSwingModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
    onClimatePowerChanged?(attribute: ClimateAttribute, value: boolean): Promise<void>;
    onClimateTargetHumidityChanged?(attribute: ClimateAttribute, value: number): Promise<void>;
}