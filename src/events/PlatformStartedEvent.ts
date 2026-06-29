import { Event } from "./Event";

/**
 * Event published when the platform has started.
 */
export class PlatformStartedEvent implements Event {

    public readonly id = "platform.started";
    public readonly timestamp = new Date();

}
