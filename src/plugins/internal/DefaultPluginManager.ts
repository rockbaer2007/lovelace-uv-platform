import { Registry } from "../../registry";
import { Plugin } from "../Plugin";
import { PluginManager } from "../PluginManager";

/**
 * Default implementation of the PluginManager.
 *
 * Visibility: Internal
 * Stability: Experimental
 */
export class DefaultPluginManager implements PluginManager {

    private readonly _plugins = new Registry<Plugin>(
        plugin => plugin.metadata.id
    );

    public register(plugin: Plugin): void {
        this._plugins.register(plugin);
    }

    public unregister(id: string): boolean {
        return this._plugins.unregister(id);
    }

    public get(id: string): Plugin | undefined {
        return this._plugins.get(id);
    }

    public getAll(): readonly Plugin[] {
        return this._plugins.getAll();
    }

    public initialize(): void {
        // Will be implemented in CORE-008B.
    }

    public start(): void {
        // Will be implemented in CORE-008B.
    }

    public stop(): void {
        // Will be implemented in CORE-008B.
    }

    public dispose(): void {
        // Will be implemented in CORE-008B.
    }

}