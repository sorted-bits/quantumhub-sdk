import { LightAttribute } from "../attributes";
import { LightColor } from "../light";
import { Device } from "./device";

export interface LightDevice extends Device {
    onPowerChanged(attribute: LightAttribute, value: boolean): Promise<void>;
    onBrightnessChanged?(attribute: LightAttribute, value: number): Promise<void>;
    onColorChanged?(attribute: LightAttribute, value: LightColor): Promise<void>;
    onEffectChanged?(attribute: LightAttribute, value: string): Promise<void>;
}
