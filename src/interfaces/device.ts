import { Attribute, ButtonAttribute, ClimateAttribute, NumberAttribute, SceneAttribute, SelectAttribute, SwitchAttribute } from './attributes/device-attributes';
import { Provider } from './provider';

export interface Device {
  /**
   * Called after the package is loaded from disk and the provider is initialized.
   *
   * @param provider
   * @returns
   */
  init(provider: Provider): Promise<boolean>;

  /**
   * Called when the device is being started. After the init method.
   */
  start(): Promise<void>;

  /**
   * Called when the device is being stopped.
   */
  stop(): Promise<void>;

  /**
   * Called when the device is being destroyed.
   */
  destroy(): Promise<void>;

  /**
   * Called when the value of an attribute is changed.
   * For example a value is changed by the Home Assistant MQTT integration.
   *
   * @param attribute
   * @param value
   */
  valueChanged(attribute: Attribute, value: any): Promise<void>;

  /**
   * Called when the power command is changed.
   *
   * @param attribute
   * @param value
   */
  onPowerCommandChanged?(attribute: Attribute, value: boolean): Promise<void>;

  /**
   * Called when a message is received on an MQTT topic the device is subscribed to
   * through the internal MQTT client.
   *
   * @param topic
   * @param message
   */
  onMessage?(topic: string, message: Buffer): Promise<void>;

  /**
   * Called when a scene is triggered.
   *
   * @param attribute
   */
  onSceneTriggered?(attribute: SceneAttribute): Promise<void>;

  /**
   * Called when a button is pressed.
   */
  onButtonPressed?(attribute: ButtonAttribute): Promise<void>;

  /**
   * Called when a select is changed.
   *
   * @param attribute
   * @param value
   */
  onSelectChanged?(attribute: SelectAttribute, value: string): Promise<void>;

  /**
   * Called when a number is changed.
   *
   * @param attribute
   * @param value
   */
  onNumberChanged?(attribute: NumberAttribute, value: number): Promise<void>;

  /**
   * Called when a switch is changed.
   */
  onSwitchChanged?(attribute: SwitchAttribute, value: boolean): Promise<void>;

  /* Climate methods */
  onModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimateModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimatePresetModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimateFanModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onClimateSwingModeChanged?(attribute: ClimateAttribute, value: string): Promise<void>;
  onPowerChanged?(attribute: ClimateAttribute, value: boolean): Promise<void>;
  onTargetTemperatureChanged?(attribute: ClimateAttribute, value: number): Promise<void>;
  onTargetHumidityChanged?(attribute: ClimateAttribute, value: number): Promise<void>;
}
