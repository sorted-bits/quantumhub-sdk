export interface Provider {
  setAttributeValue(attribute: string, value: any): Promise<void>;
  setAvailability(availability: boolean): Promise<void>;

  subscribeToTopic(topic: string): Promise<void>;
  publishToTopic(topic: string, message: string, retain: boolean): Promise<void>;

  getConfig(): any;
}
