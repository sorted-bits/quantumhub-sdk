import { NumberAttribute } from "../attributes";
import { Device } from "./device";

export interface NumberDevice extends Device {
    /**
      * Called when a number is changed.
      *
      * @param attribute
      * @param value
      */
    onNumberChanged(attribute: NumberAttribute, value: number): Promise<void>;
}
