import { Registry } from "../../registry";
import { Plugin } from "../Plugin";
import { PluginManager } from "../PluginManager";

/**
 * Default implementation of PluginManager.
 */
export class DefaultPluginManager implements PluginManager {

    private readonly _plugins = new Registry<Plugin>();

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
        // Implement in next milestone.
    }

    public start(): void {
        // Implement in next milestone.
    }

    public stop(): void {
        // Implement in next milestone.
    }

    public dispose(): void {
        // Implement in next milestone.
    }

}