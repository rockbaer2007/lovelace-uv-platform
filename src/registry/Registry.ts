import { RegistryItem } from "./RegistryItem";

/**
 * Generic registry for storing platform components.
 */
export class Registry<T extends RegistryItem> {

    private readonly items = new Map<string, T>();

    /**
     * Registers an item.
     */
    public register(item: T): void {
        this.items.set(item.id, item);
    }

    /**
     * Removes an item.
     */
    public unregister(id: string): boolean {
        return this.items.delete(id);
    }

    /**
     * Returns an item.
     */
    public get(id: string): T | undefined {
        return this.items.get(id);
    }

    /**
     * Checks whether an item exists.
     */
    public has(id: string): boolean {
        return this.items.has(id);
    }

    /**
     * Returns all registered items.
     */
    public getAll(): readonly T[] {
        return [...this.items.values()];
    }

    /**
     * Clears the registry.
     */
    public clear(): void {
        this.items.clear();
    }

    /**
     * Number of registered items.
     */
    public get size(): number {
        return this.items.size;
    }
}