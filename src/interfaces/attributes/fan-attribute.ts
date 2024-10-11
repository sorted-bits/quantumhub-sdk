import { DeviceType } from "../../enums";
import { BaseAttribute } from "./base-attribute";

export interface FanAttribute extends BaseAttribute {
    type: DeviceType.fan;

    // List of preset modes this fan is capable of running at. 
    // Common examples include auto, smart, whoosh, eco and breeze.
    preset_modes?: string[];

    // The maximum speed this fan can run at.
    speed_range_max?: number;

    // The minimum speed this fan can run at.
    speed_range_min?: number;
}