import { DeviceType } from "../../enums/device-type";
import { BaseAttributeWithState } from "./base-attribute";

export interface DeviceTrackerState {
    latitude?: number;
    longitude?: number;
}

export interface DeviceTrackerAttribute extends BaseAttributeWithState {
    type: DeviceType.device_tracker;
    source_type?: 'gps' | 'router' | 'bluetooth' | 'bluetooth_le';

    stateDefinition: DeviceTrackerState;
}