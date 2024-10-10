import { BaseAttribute } from "./base-attribute";

import { DeviceType } from "../../enums/device-type";

export interface SwitchAttribute extends BaseAttribute {
    type: DeviceType.switch;
    optimistic: boolean;
}