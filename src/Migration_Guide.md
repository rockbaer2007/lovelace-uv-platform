# Registry Refactor (CORE-003)

## What changed?

The registry is no longer constrained to `RegistryItem`.

Old:

```ts
const registry = new Registry<RegistryItem>();
```

New:

```ts
const registry = new Registry<RegistryItem>(
    item => item.id
);
```

Plugins:

```ts
const plugins = new Registry<Plugin>(
    plugin => plugin.metadata.id
);
```

PlatformServices:

```ts
private readonly _registry = new Registry<RegistryItem>(
    item => item.id
);
```

DefaultPluginManager:

```ts
private readonly _plugins = new Registry<Plugin>(
    plugin => plugin.metadata.id
);
```
