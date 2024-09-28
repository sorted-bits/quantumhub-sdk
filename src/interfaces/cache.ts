export interface Cache {
    /**
     * Sets a value in the cache
     *
     * @param {string} key The key to set
     * @param {*} value The value to set
     * @memberof Provider
     */
    set(key: string, value: any): Promise<void>;

    /**
     * Gets a value from the cache
     *
     * @param {string} key The key to get
     * @returns {*} The value
     * @memberof Provider
     */
    get(key: string): Promise<any>;

    /**
     * Removes a value from the cache
     *
     * @param {string} key The key to remove
     * @memberof Provider
     */
    delete(key: string): Promise<void>;

    /**
     * Gets all values from the cache
     *
     * @returns {Promise<any[]>} The values
     * @memberof Provider
     */
    all(): Promise<any[]>;
}
