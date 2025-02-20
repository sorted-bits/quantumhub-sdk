import { DeviceClass, DeviceType } from "../../enums";

export interface BaseAttribute {
  key: string;
  type: DeviceType;
  name: string;
  device_class?: DeviceClass;
  unit_of_measurement?: string;
  state_class?: string;
  availability?: boolean;
  unavailability_value?: string;
  enabled_by_default?: boolean;
  icon?: string;
}

export interface BaseAttributeWithState extends BaseAttribute {
  stateDefinition: any;
}