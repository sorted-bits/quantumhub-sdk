import { Logger } from './logger';
import { Cache } from './cache';
import { MQTT } from './mqtt';
import { Timeout } from './timeout';
import { PackageDefinition } from './package-definition';
import { BaseAttribute } from '../attributes';
import { BaseAttributeWithState } from '../attributes/base-attribute';

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
   * @param {T} attribute The attribute to set the state for
   * @param {T['stateDefinition']} state The state to set for the attribute, can be a partial state
   * @param {object} options Options for the operation
   * @param {boolean} options.overwrite Whether to fully overwrite the existing state, otherwise only the provided keys are updated
   * @memberof Provider
   */
  setAttributeState<T extends BaseAttributeWithState>(attribute: T, state: T['stateDefinition'], options?: { overwrite?: boolean }): Promise<void>;

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
   * Returns the attribute with the given name
   *
   * @param {string} name The name of the attribute
   * @returns {T | undefined} The attribute or undefined if it does not exist
   * @memberof Provider
   */
  getAttribute<T extends BaseAttribute>(name: string): T | undefined;
}
