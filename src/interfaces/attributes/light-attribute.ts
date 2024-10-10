import { DeviceType } from "../../enums/device-type";
import { BaseAttribute } from "./base-attribute";

// JSON Schema for Light MQTT Configuration
// https://www.home-assistant.io/integrations/light.mqtt/#json-schema---configuration
export interface LightAttribute extends BaseAttribute {
    type: DeviceType.light;

    // Flag that defines if the light works in optimistic mode.
    optimistic: boolean;

    // Flag that defines if light supports brightness when the rgb, rgbw, or rgbww color mode is supported.
    brightness?: boolean;

    // Defines the maximum brightness value (i.e., 100%) of the MQTT device.
    brightness_scale?: number;

    // Flag that defines if the light supports effects.
    effect?: boolean;

    // The list of effects the light supports.
    effect_list?: string[];

    // The duration, in seconds, of a “long” flash.
    flash_time_long?: number;

    // The duration, in seconds, of a “short” flash.
    flash_time_short?: number;

    // The maximum color temperature in mireds.
    max_mireds?: number;

    // The minimum color temperature in mireds.
    min_mireds?: number;

    // A list of color modes supported by the list. Possible color modes are onoff, brightness, color_temp, hs, xy, rgb, rgbw, rgbww, white. 
    // Note that if onoff or brightness are used, that must be the only value in the list.
    supported_color_modes?: string[];

    // Defines the maximum white level (i.e., 100%) of the MQTT device. This is used when setting the light to white mode.
    white_scale?: number;
}