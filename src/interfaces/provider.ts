
export interface Provider {
    setAttributeValue(attribute: string, value: any): Promise<void>;
    getConfig(): any;
}
