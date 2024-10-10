import { DeviceType } from "../../enums/device-type";
import { BaseAttribute } from "./base-attribute";

export interface SceneAttribute extends BaseAttribute {
    type: DeviceType.scene;
}
