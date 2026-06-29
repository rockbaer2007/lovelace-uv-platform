---
Project: Lovelace UV Platform
Document: Component Design – Provider API
Document ID: CORE-009
Version: 1.0
Status: Draft
Release: Genesis
---

# CORE-009 – Provider API

## Purpose

Providers are responsible for loading platform resources.
Providers never render UI and never know about layouts.

## Architecture

Provider
    │
    ▼
ResourceResult<T>
    │
    ▼
Resource<T>
    │
    ▼
Plugin
    │
    ▼
Layout
    │
    ▼
Renderer

## Provider Contract

```ts
export interface Provider<T> {

    readonly metadata: ProviderMetadata;

    load(): Promise<ResourceResult<T>>;
}
```

## Design Principles

- Generic
- Type-safe
- Async by default
- UI independent
- Home Assistant independent
- Testable
- Replaceable
