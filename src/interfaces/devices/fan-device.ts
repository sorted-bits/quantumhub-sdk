import { FanAttribute } from "../attributes";
import { Device } from "./device";

export interface FanDevice extends Device {
    onFanSpeedChanged(attribute: FanAttribute, value: number): Promise<void>;

    onFanPresetModeChanged?(attribute: FanAttribute, value: string): Promise<void>;

    onFanOscillationChanged?(attribute: FanAttribute, value: boolean): Promise<void>;

    onFanDirectionChanged?(attribute: FanAttribute, value: string): Promise<void>;
}