import { SceneAttribute } from "../attributes";
import { Device } from "./device";

export interface SceneDevice extends Device {
    /**
     * Called when a scene is triggered.
     *
     * @param attribute
     */
    onSceneTriggered(attribute: SceneAttribute): Promise<void>;
}