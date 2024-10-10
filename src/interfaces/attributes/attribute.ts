import { BaseAttribute, ButtonAttribute, ClimateAttribute, DeviceTrackerAttribute, LightAttribute, NumberAttribute, SceneAttribute, SelectAttribute, SwitchAttribute } from ".";

export type Attribute =
    BaseAttribute |
    SwitchAttribute |
    LightAttribute |
    NumberAttribute |
    SelectAttribute |
    ButtonAttribute |
    DeviceTrackerAttribute |
    SceneAttribute |
    ClimateAttribute;
