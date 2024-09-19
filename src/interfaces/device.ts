import { Attribute, ButtonAttribute, ClimateAttribute, NumberAttribute, SceneAttribute, SelectAttribute, SwitchAttribute } from './attributes/device-attributes';
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

  /* Climate methods */
  onHvacModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimateModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimatePresetModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimateFanModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimateSwingModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onPowerChanged?(attribute: ClimateAttribute, value: boolean): Promise<void>;
  onTargetTemperatureChanged?(attribute: ClimateAttribute, value: number): Promise<void>;
}
