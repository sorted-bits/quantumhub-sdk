import { ClimateAttribute } from "../attributes";
import { Device } from "./device";

export interface ClimateDevice extends Device {
    /* Climate methods */
    onTargetTemperatureChanged(attribute: ClimateAttribute, value: number): Promise<void>;

    onModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
    onClimateModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
    onClimatePresetModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
    onClimateFanModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
    onClimateSwingModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
    onPowerChanged?(attribute: ClimateAttribute, value: boolean): Promise<void>;
    onTargetHumidityChanged?(attribute: ClimateAttribute, value: number): Promise<void>;
}