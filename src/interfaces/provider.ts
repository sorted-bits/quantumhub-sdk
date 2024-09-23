import { Logger } from './logger';

export interface Provider {
  /**
   * The logger created specific for this device
   *
   * @type {Logger}
   * @memberof Provider
   */
  get logger(): Logger;

  /**
   * Stores the value of the attribute in the state manager and publishes the changes to MQTT
   *
   * @param {string} attribute The name of the attribute
   * @param {*} value The value of the attribute
   * @memberof Provider
   */
  setAttributeValue(attribute: string, value: any): Promise<void>;

  /**
   * Sets the availability of the device and publishes the changes to MQTT
   *
   * @param {boolean} availability The availability of the device
   * @memberof Provider
   */
  setAvailability(availability: boolean): Promise<void>;

  /**
   * Returns the configuration of the device as defined in the configuration file
   *
   * @returns {*} The configuration of the device
   * @memberof Provider
   */
  getConfig(): any;

  /**
   * Subscribes directly to a MQTT topic
   *
   * @param {string} topic The topic to subscribe to
   * @returns {Promise<void>}
   * @memberof Provider
   */
  subscribeToTopic(topic: string): Promise<void>;

  /**
   * Publishes a message to a MQTT topic
   *
   * @param {string} topic The topic to publish to
   * @param {string} message The message to publish
   * @param {boolean} retain Whether the message should be retained
   * @returns {Promise<void>}
   * @memberof Provider
   */
  publishToTopic(topic: string, message: string, retain: boolean): Promise<void>;

  /**
   * Sets a timeout that will be cleared when the timeout is triggered
   * All these timeouts are stored in the provider and will be cleared when the device is stopped
   *
   * @param {() => void} callback The callback to trigger
   * @param {number} timeout The timeout in milliseconds
   * @returns {NodeJS.Timeout} The timeout ID
   * @memberof Provider
   */
  setTimeout(callback: () => Promise<void>, timeout: number): Promise<NodeJS.Timeout>;

  /**
   * Clears a timeout that was previously set
   *
   * @param {NodeJS.Timeout} timeout The timeout ID
   * @memberof Provider
   */
  clearTimeout(timeout: NodeJS.Timeout): void;
}
