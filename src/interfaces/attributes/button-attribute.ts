import { BaseAttribute } from "./base-attribute";

import { DeviceType } from "../../enums/device-type";

export interface ButtonAttribute extends BaseAttribute {
    type: DeviceType.button;
}