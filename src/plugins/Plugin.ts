import { PluginContext } from "./PluginContext";
import { PluginMetadata } from "./PluginMetadata";

/**
 * Base interface for all platform plugins.
 *
 * Public API
 * Stability: Experimental
 */
export interface Plugin {

    /**
     * Plugin metadata.
     */
    readonly metadata: PluginMetadata;

    /**
     * Called once after registration.
     */
    initialize(context: PluginContext): void;

    /**
     * Starts the plugin.
     */
    start(): void;

    /**
     * Stops the plugin.
     */
    stop(): void;

    /**
     * Releases all resources.
     */
    dispose(): void;

}