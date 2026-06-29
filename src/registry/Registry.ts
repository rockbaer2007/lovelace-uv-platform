import { RegistryItem } from "./RegistryItem";

/**
 * Generic registry for storing platform components.
 */
export class Registry<T extends RegistryItem> {

    private readonly items = new Map<string, T>();

    /**
     * Registers an item.
     * Throws an error if the identifier is already registered.
     */
    public register(item: T): void {

        if (this.items.has(item.id)) {
            throw new Error(
                `Registry item '${item.id}' is already registered.`
            );
        }

        this.items.set(item.id, item);

    }

    /**
     * Removes an item.
     */
    public unregister(id: string): boolean {
        return this.items.delete(id);
    }

    /**
     * Returns an item by its identifier.
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
     * Removes all registered items.
     */
    public clear(): void {
        this.items.clear();
    }

    /**
     * Returns the number of registered items.
     */
    public get size(): number {
        return this.items.size;
    }

}
