import { Provider } from '../application';
import { SceneAttribute, ButtonAttribute, SelectAttribute, NumberAttribute, SwitchAttribute } from '../attributes';
import { Attribute } from '../attributes/attribute';

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







}