import { DeviceType } from "../../enums/device-type";
import { BaseAttribute, BaseAttributeWithState } from "./base-attribute";

export interface SelectState {
    state?: string;
}

export interface SelectAttribute extends BaseAttributeWithState {
    type: DeviceType.select;
    optimistic: boolean;
    options: string[];
    stateDefinition: SelectState;
}