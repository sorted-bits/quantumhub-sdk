import { SelectAttribute } from "../attributes";
import { Device } from "./device";

export interface SelectDevice extends Device {
    /**
     * Called when a select is changed.
     *
     * @param attribute
     * @param value
     */
    onSelectChanged(attribute: SelectAttribute, value: string): Promise<void>;
}