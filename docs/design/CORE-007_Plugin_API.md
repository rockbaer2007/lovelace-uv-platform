---
Project         : Lovelace UV Platform
Document        : Component Design – Plugin API
Document ID     : CORE-007
Version         : 1.0
Release         : Genesis
Status          : Draft
Language        : English
Maintainer      : UGSO Open Source Team
Organization    : UGSO Open Source
API Visibility  : Public
API Stability   : Experimental
Last Updated    : 2026-06-29
License         : MIT
---

# CORE-007 – Plugin API

## Purpose

Define the public contract for all platform plugins.

## Architecture

Plugin
    │
    ▼
PluginContext
    │
    ▼
Platform Services
    ├── Registry
    ├── EventBus
    └── Logger (future)

## PluginMetadata

```ts
interface PluginMetadata {
  readonly id: string;
  readonly name: string;
  readonly version: string;
  readonly apiVersion: string;
  readonly author: string;
  readonly description?: string;
  readonly homepage?: string;
  readonly repository?: string;
}
```

## Plugin

```ts
interface Plugin {
  readonly metadata: PluginMetadata;
  initialize(context: PluginContext): void;
  start(): void;
  stop(): void;
  dispose(): void;
}
```

## PluginContext

The context exposes only the minimum required platform services.

Initial services:

- Registry
- EventBus

PlatformCore is never exposed directly.

## Platform Rules

- Plugins communicate exclusively through PluginContext.
- Plugins should remain stateless whenever possible.
- Plugins must be disposable.
- Plugin lifecycle is managed by PluginManager.

## Acceptance Criteria

- Public API
- Type-safe
- Provider-independent
- No Home Assistant dependencies
- Backward compatible whenever possible
