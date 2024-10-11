import { DeviceType } from "../../enums/device-type";
import { BaseAttribute, BaseAttributeWithState } from "./base-attribute";

export interface NumberState {
    state?: number;
}

export interface NumberAttribute extends BaseAttributeWithState {
    type: DeviceType.number;
    min: number;
    max: number;
    step: number;

    stateDefinition: NumberState;
}