import { PlatformServices } from "./PlatformServices";

/**
 * Main entry point of the Lovelace UV Platform.
 */
export class PlatformCore {

    private readonly _services = new PlatformServices();

    /**
     * Returns the platform services.
     */
    public get services(): PlatformServices {
        return this._services;
    }

    /**
     * Starts the platform.
     *
     * Lifecycle management will be implemented
     * in CORE-005.
     */
    public start(): void {
        // Intentionally left empty.
    }

}
