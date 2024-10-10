import { LightAttribute } from "../attributes";
import { LightColor } from "../light";
import { Device } from "./device";

export interface LightDevice extends Device {
    onLightPowerChanged(attribute: LightAttribute, value: boolean): Promise<void>;
    onLightBrightnessChanged?(attribute: LightAttribute, value: number): Promise<void>;
    onLightColorChanged?(attribute: LightAttribute, value: LightColor): Promise<void>;
    onLightEffectChanged?(attribute: LightAttribute, value: string): Promise<void>;
}
