import { Plugin } from "./Plugin";

/**
 * Public Plugin Manager API.
 *
 * Visibility: Public
 * Stability: Experimental
 */
export interface PluginManager {

    register(plugin: Plugin): void;
    unregister(id: string): boolean;

    initialize(): void;
    start(): void;
    stop(): void;
    dispose(): void;

    initializePlugin(id: string): void;
    startPlugin(id: string): void;
    stopPlugin(id: string): void;
    disposePlugin(id: string): void;

    get(id: string): Plugin | undefined;
    getAll(): readonly Plugin[];
}
