import { DeviceType } from "../../enums/device-type";
import { BaseAttribute } from "./base-attribute";

export interface NumberAttribute extends BaseAttribute {
    type: DeviceType.number;
    min: number;
    max: number;
    step: number;
}