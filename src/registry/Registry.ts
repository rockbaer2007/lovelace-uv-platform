export class Registry<T extends { id: string }> {
  private readonly items = new Map<string, T>();

  public register(item: T): void {
    this.items.set(item.id, item);
  }

  public unregister(id: string): boolean {
    return this.items.delete(id);
  }

  public has(id: string): boolean {
    return this.items.has(id);
  }

  public get(id: string): T | undefined {
    return this.items.get(id);
  }

  public getAll(): T[] {
    return [...this.items.values()];
  }

  public clear(): void {
    this.items.clear();
  }

  public count(): number {
    return this.items.size;
  }
}