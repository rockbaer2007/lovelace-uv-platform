import { Event } from "./Event";
import { EventConstructor } from "./EventConstructor";
import { EventListener } from "./EventListener";

/**
 * Lightweight synchronous event bus.
 */
export class EventBus {

    private readonly _listeners = new Map<Function, Set<EventListener<any>>>();

    public subscribe<T extends Event>(
        eventType: EventConstructor<T>,
        listener: EventListener<T>
    ): void {

        let listeners = this._listeners.get(eventType);

        if (!listeners) {
            listeners = new Set();
            this._listeners.set(eventType, listeners);
        }

        listeners.add(listener);
    }

    public unsubscribe<T extends Event>(
        eventType: EventConstructor<T>,
        listener: EventListener<T>
    ): void {

        this._listeners.get(eventType)?.delete(listener);
    }

    public publish<T extends Event>(event: T): void {

        const listeners = this._listeners.get(event.constructor as Function);

        if (!listeners) {
            return;
        }

        for (const listener of listeners) {
            (listener as EventListener<T>)(event);
        }
    }

}
