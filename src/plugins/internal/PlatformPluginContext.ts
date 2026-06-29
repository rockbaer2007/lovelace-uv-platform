import { EventBus } from "../../events";
import { Registry, RegistryItem } from "../../registry";
import { PluginContext } from "../PluginContext";

/**
 * Internal PluginContext implementation.
 */
export class PlatformPluginContext implements PluginContext {

    public constructor(
        public readonly registry: Registry<RegistryItem>,
        public readonly eventBus: EventBus
    ) {}

}