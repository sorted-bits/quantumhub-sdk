import { SceneAttribute } from '../attributes/device-attributes';
import { BaseDevice } from './base-device';

export interface SceneDevice extends BaseDevice {
  onSceneTriggered?(attribute: SceneAttribute): Promise<void>;
}
