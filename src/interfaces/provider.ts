export interface Provider {
  setAttributeValue(attribute: string, value: any): Promise<void>;
  setAvailability(availability: boolean): Promise<void>;

  getConfig(): any;
}
