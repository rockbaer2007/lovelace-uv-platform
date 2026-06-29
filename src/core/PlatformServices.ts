import { EventBus } from "../events";
import { Registry } from "../registry";
import { RegistryItem } from "../registry/RegistryItem";

/**
 * Provides shared platform services.
 */
export class PlatformServices {

    private readonly _registry = new Registry<RegistryItem>(
        item => item.id
    );

    private readonly _eventBus = new EventBus();

    public get registry(): Registry<RegistryItem> {
        return this._registry;
    }

    public get eventBus(): EventBus {
        return this._eventBus;
    }

}