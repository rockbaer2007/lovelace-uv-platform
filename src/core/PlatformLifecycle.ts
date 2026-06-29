import { PlatformState } from "./PlatformState";

/**
 * Manages the lifecycle of the platform.
 */
export class PlatformLifecycle {

    private _state = PlatformState.Created;

    /**
     * Returns the current platform state.
     */
    public get state(): PlatformState {
        return this._state;
    }

    /**
     * Starts the platform lifecycle.
     */
    public start(): void {

        if (this._state !== PlatformState.Created) {
            throw new Error("Platform can only be started from the Created state.");
        }

        this._state = PlatformState.Initializing;

        // Future initialization steps.

        this._state = PlatformState.Running;
    }

    /**
     * Stops the platform lifecycle.
     */
    public stop(): void {

        if (this._state !== PlatformState.Running) {
            throw new Error("Platform can only be stopped from the Running state.");
        }

        this._state = PlatformState.Stopping;

        // Future shutdown steps.

        this._state = PlatformState.Stopped;
    }
}
