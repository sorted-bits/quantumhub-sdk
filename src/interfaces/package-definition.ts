import { Attribute } from "./attributes/device-attributes";

export interface PackageDefinition {
    // Used to store the install path of the package, determined by QuantumHub
    path: string;

    // Unique identifier for the package
    name: string;

    // Version of the package
    version: string;

    // Repository of the package
    repository: string;

    // Config file of the package
    config_file: string;

    // Entry file of the package
    entry: string;

    // Author of the package
    author?: string;

    // Description of the package
    description?: string;

    // Attributes of the package
    attributes: Attribute[];
}
