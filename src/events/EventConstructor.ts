import { Event } from "./Event";

/**
 * Constructor type for events.
 */
export type EventConstructor<T extends Event> = new (...args: never[]) => T;
