import { Registry } from "../../registry";
import { PlatformServices } from "../../core/PlatformServices";
import { Plugin } from "../Plugin";
import { PluginManager } from "../PluginManager";
import { PlatformPluginContext } from "./PlatformPluginContext";

/**
 * Default PluginManager implementation.
 */
export class DefaultPluginManager implements PluginManager {

    private readonly _plugins = new Registry<Plugin>(
        plugin => plugin.metadata.id
    );

    private readonly _context: PlatformPluginContext;

    public constructor(services: PlatformServices) {
        this._context = new PlatformPluginContext(
            services.registry,
            services.eventBus
        );
    }

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
        for (const plugin of this.getAll()) {
            this.safe(() => plugin.initialize(this._context));
        }
    }

    public start(): void {
        for (const plugin of this.getAll()) {
            this.safe(() => plugin.start());
        }
    }

    public stop(): void {
        for (const plugin of this.getAll()) {
            this.safe(() => plugin.stop());
        }
    }

    public dispose(): void {
        for (const plugin of this.getAll()) {
            this.safe(() => plugin.dispose());
        }
    }

    public initializePlugin(id: string): void {
        const p = this.requirePlugin(id);
        this.safe(() => p.initialize(this._context));
    }

    public startPlugin(id: string): void {
        const p = this.requirePlugin(id);
        this.safe(() => p.start());
    }

    public stopPlugin(id: string): void {
        const p = this.requirePlugin(id);
        this.safe(() => p.stop());
    }

    public disposePlugin(id: string): void {
        const p = this.requirePlugin(id);
        this.safe(() => p.dispose());
    }

    private requirePlugin(id: string): Plugin {
        const plugin = this.get(id);
        if (!plugin) {
            throw new Error(`Plugin '${id}' was not found.`);
        }
        return plugin;
    }

    private safe(action: () => void): void {
        try {
            action();
        } catch (error) {
            // TODO: publish lifecycle error event and log it.
            console.error(error);
        }
    }
}
