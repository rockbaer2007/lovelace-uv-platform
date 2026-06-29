import { Registry, RegistryItem } from "../registry";

/**
 * Central access point for all Platform Core services.
 *
 * PlatformServices contains infrastructure only.
 * It must never contain business logic.
 */
export class PlatformServices {

    private readonly _registry = new Registry<RegistryItem>();

    /**
     * Returns the shared registry instance.
     */
    public get registry(): Registry<RegistryItem> {
        return this._registry;
    }

}
