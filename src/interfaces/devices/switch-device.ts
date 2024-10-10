import { SwitchAttribute } from "../attributes";
import { Device } from "./device";

export interface SwitchDevice extends Device {
    /**
     * Called when a switch is changed.
     *
     * @param attribute
     * @param value
     */
    onSwitchChanged(attribute: SwitchAttribute, value: boolean): Promise<void>;
}
