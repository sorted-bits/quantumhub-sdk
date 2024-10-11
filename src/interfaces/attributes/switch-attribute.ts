import { BaseAttributeWithState } from "./base-attribute";

import { DeviceType } from "../../enums/device-type";

export interface SwitchState {
    state?: boolean;
}

export interface SwitchAttribute extends BaseAttributeWithState {
    type: DeviceType.switch;
    optimistic: boolean;
    stateDefinition: SwitchState;
}