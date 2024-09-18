import { Attribute, ButtonAttribute, NumberAttribute, SceneAttribute, SelectAttribute, SwitchAttribute } from './attributes/device-attributes';
import { Provider } from './provider';

export interface Device {
  init(provider: Provider): Promise<boolean>;
  start(): Promise<void>;
  stop(): Promise<void>;
  destroy(): Promise<void>;

  onMessage?(topic: string, message: Buffer): Promise<void>;

  valueChanged(attribute: Attribute, value: any): Promise<void>;

  onSceneTriggered?(attribute: SceneAttribute): Promise<void>;
  onButtonPressed?(attribute: ButtonAttribute): Promise<void>;
  onSelectChanged?(attribute: SelectAttribute, value: string): Promise<void>;
  onNumberChanged?(attribute: NumberAttribute, value: number): Promise<void>;
  onSwitchChanged?(attribute: SwitchAttribute, value: boolean): Promise<void>;
}
