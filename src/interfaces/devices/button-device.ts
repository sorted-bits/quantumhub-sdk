import { ButtonAttribute } from "../attributes";
import { Device } from "./device";

export interface ButtonDevice extends Device {
    /**
     * Called when a button is pressed.
     *
     * @param attribute
     */
    onButtonPressed(attribute: ButtonAttribute): Promise<void>;
}