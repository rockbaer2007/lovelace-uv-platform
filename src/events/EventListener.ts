import { Event } from "./Event";

/**
 * Event listener callback.
 */
export type EventListener<T extends Event> = (event: T) => void;
