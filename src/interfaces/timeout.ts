export interface Timeout {
    /**
     * Sets a timeout that will be cleared when the timeout is triggered
     * All these timeouts are stored in the provider and will be cleared when the device is stopped
     *
     * @param {() => void} callback The callback to trigger
     * @param {number} timeout The timeout in milliseconds
     * @returns {NodeJS.Timeout} The timeout ID
     * @memberof Provider
     */
    set(callback: () => Promise<void>, timeout: number): NodeJS.Timeout;

    /**
     * Clears a timeout that was previously set
     *
     * @param {NodeJS.Timeout} timeout The timeout ID
     * @memberof Provider
     */
    clear(timeout: NodeJS.Timeout): void;
}