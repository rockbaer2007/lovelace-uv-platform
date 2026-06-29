# API-002 – Provider API

## Public Contract

```ts
interface Provider<T> {
    readonly metadata: ProviderMetadata;
    load(): Promise<ResourceResult<T>>;
}
```

## Rules

- Never render UI
- Never access PlatformCore directly
- Use ProviderContext only (future)
- Return ResourceResult<T>
- Throw only exceptional errors
