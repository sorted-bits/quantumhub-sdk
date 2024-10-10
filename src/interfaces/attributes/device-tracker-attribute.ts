import { DeviceType } from "../../enums/device-type";
import { BaseAttribute } from "./base-attribute";

export interface DeviceTrackerAttribute extends BaseAttribute {
    type: DeviceType.device_tracker;
    source_type?: 'gps' | 'router' | 'bluetooth' | 'bluetooth_le';
}