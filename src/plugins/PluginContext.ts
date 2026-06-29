import { EventBus } from "../events";
import { Registry, RegistryItem } from "../registry";

/**
 * Provides controlled access to platform services.
 *
 * Public API
 * Stability: Experimental
 */
export interface PluginContext {

    /**
     * Shared platform registry.
     */
    readonly registry: Registry<RegistryItem>;

    /**
     * Shared platform event bus.
     */
    readonly eventBus: EventBus;

}