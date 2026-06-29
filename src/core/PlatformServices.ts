import { Registry, RegistryItem } from "../registry";

/**
 * Central access point for Platform Core services.
 */
export class PlatformServices {

    private readonly _registry = new Registry<RegistryItem>(item => item.id);

    /**
     * Returns the shared registry.
     */
    public get registry(): Registry<RegistryItem> {
        return this._registry;
    }

}