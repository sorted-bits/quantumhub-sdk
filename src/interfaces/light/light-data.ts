import { LightColor } from "./light-color";

export interface LightData {
    state: string;
    brightness: number;
    color: LightColor;
    effect: string;
}
