import { Logger } from './logger';
import { Cache } from './cache';
import { MQTT } from './mqtt';
import { Timeout } from './timeout';
import { PackageDefinition } from './package-definition';

export interface Provider {
  /**
   * Access to provider specific cache
   *
   * @type {Cache}
   * @memberof Provider
   */
  get cache(): Cache;

  /**
   * Access to provider specific MQTT client
   *
   * @type {MQTT}
   * @memberof Provider
   */
  get mqtt(): MQTT;

  /**
   * Access to provider specific timeout manager
   *
   * @type {Timeout}
   * @memberof Provider
   */
  get timeout(): Timeout;

  /**
   * The logger created specific for this device
   *
   * @type {Logger}
   * @memberof Provider
   */
  get logger(): Logger;

  /**
   * The definition of the device
   *
   * @type {PackageDefinition}
   * @memberof Provider
   */
  get definition(): PackageDefinition;

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
}
