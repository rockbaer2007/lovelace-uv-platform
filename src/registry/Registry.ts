/**
 * Generic registry implementation.
 */
export class Registry<T> {

    private readonly _items = new Map<string, T>();

    public constructor(
        private readonly _keySelector: (item: T) => string
    ) {}

    public register(item: T): void {
        const id = this._keySelector(item);

        if (this._items.has(id)) {
            throw new Error(`Registry item '${id}' is already registered.`);
        }

        this._items.set(id, item);
    }

    public unregister(id: string): boolean {
        return this._items.delete(id);
    }

    public get(id: string): T | undefined {
        return this._items.get(id);
    }

    public getAll(): readonly T[] {
        return [...this._items.values()];
    }

    public has(id: string): boolean {
        return this._items.has(id);
    }

    public clear(): void {
        this._items.clear();
    }

}
