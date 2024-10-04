import { Attribute } from "./attributes/device-attributes";

export interface Definition {
    path: string;

    name: string;
    identifier: string;
    entry: string;
    author?: string;
    description?: string;
    version?: string;

    config_path: string;
    repository?: string;

    attributes: Attribute[];
}
