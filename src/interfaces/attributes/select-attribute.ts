import { DeviceType } from "../../enums/device-type";
import { BaseAttribute } from "./base-attribute";

export interface SelectAttribute extends BaseAttribute {
    type: DeviceType.select;
    optimistic: boolean;
    options: string[];
}
