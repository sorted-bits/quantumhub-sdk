export interface Provider {
  /**
   * Stores the value of the attribute in the state manager and publishes the changes to MQTT
   *
   * @param {string} attribute The name of the attribute
   * @param {*} value The value of the attribute
   * @memberof ModuleProvider
   */
  setAttributeValue(attribute: string, value: any): Promise<void>;

  /**
   * Sets the availability of the device and publishes the changes to MQTT
   *
   * @param {boolean} availability The availability of the device
   * @memberof ModuleProvider
   */
  setAvailability(availability: boolean): Promise<void>;

  /**
   * Returns the configuration of the device as defined in the configuration file
   *
   * @returns {*} The configuration of the device
   * @memberof ModuleProvider
   */
  getConfig(): any;

  /**
   * Subscribes directly to a MQTT topic
   *
   * @param {string} topic The topic to subscribe to
   * @returns {Promise<void>}
   * @memberof ModuleProvider
   */
  subscribeToTopic(topic: string): Promise<void>;

  /**
   * Publishes a message to a MQTT topic
   *
   * @param {string} topic The topic to publish to
   * @param {string} message The message to publish
   * @param {boolean} retain Whether the message should be retained
   * @returns {Promise<void>}
   * @memberof ModuleProvider
   */
  publishToTopic(topic: string, message: string, retain: boolean): Promise<void>;
}
