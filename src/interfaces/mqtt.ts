export interface MQTT {
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
}