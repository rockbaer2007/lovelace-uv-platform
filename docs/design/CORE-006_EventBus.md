---
Document: Component Design -- Event Bus
Document ID: CORE-006
Language: English
Last Updated: 2026-06-29
License: MIT
Maintainer: UGSO Open Source Team
Organization: UGSO Open Source
Project: Lovelace UV Platform
Release: Genesis
Status: Draft
Version: 1
---

# CORE-006 -- Event Bus

## Purpose

Provide a lightweight, type-safe communication mechanism between
platform components.

The Event Bus enables loose coupling between infrastructure components
while remaining independent from Home Assistant and business logic.

------------------------------------------------------------------------

## Related Documents

-   DOC-003 -- Architecture
-   DOC-004 -- Roadmap
-   DOC-005 -- Coding Guidelines
-   CORE-004 -- Platform Services
-   CORE-005 -- Lifecycle Management
-   P-001 -- Platform Core Independence

------------------------------------------------------------------------

# Responsibilities

The Event Bus is responsible for:

-   Publishing events
-   Delivering events to subscribers
-   Managing subscriptions
-   Decoupling platform components

The Event Bus must not contain business logic.

------------------------------------------------------------------------

# Architecture

``` text
PlatformCore
    │
    ├── PlatformServices
    │      ├── Registry
    │      └── EventBus
    │
    └── PlatformLifecycle
            │
            ▼
      PlatformStartedEvent
            │
            ▼
         EventBus
            │
      ├───────────────┐
      ▼               ▼
 PluginManager   ProviderManager
```

------------------------------------------------------------------------

# Components

## Event

Base interface implemented by all events.

Required properties:

-   id
-   timestamp

------------------------------------------------------------------------

## Event Listener

Receives events from the Event Bus.

------------------------------------------------------------------------

## Event Bus

Coordinates subscriptions and event delivery.

------------------------------------------------------------------------

# Public API

``` ts
subscribe<T extends Event>(
    eventType: EventConstructor<T>,
    listener: EventListener<T>
): void

unsubscribe<T extends Event>(
    eventType: EventConstructor<T>,
    listener: EventListener<T>
): void

publish<T extends Event>(
    event: T
): void
```

------------------------------------------------------------------------

# Design Decisions

-   Strongly typed events
-   No string-based event names
-   Synchronous event dispatch (Genesis)
-   No Home Assistant dependencies
-   Provider-independent implementation

------------------------------------------------------------------------

# Example

``` ts
eventBus.subscribe(
    PlatformStartedEvent,
    event => {
        console.log(event.timestamp);
    }
);

eventBus.publish(
    new PlatformStartedEvent()
);
```

------------------------------------------------------------------------

# Future Extensions

Future releases may add:

-   Async dispatch
-   Event priorities
-   Wildcard subscriptions
-   Event history
-   Event filtering
-   Sticky events

These extensions must remain backward compatible.

------------------------------------------------------------------------

# Acceptance Criteria

-   Type-safe API
-   Generic implementation
-   Unit-testable
-   No business logic
-   Stable public API
-   Fully documented

------------------------------------------------------------------------

# Suggested Source Structure

``` text
src/
└── events/
    ├── Event.ts
    ├── EventBus.ts
    ├── EventListener.ts
    ├── EventConstructor.ts
    └── index.ts
```

------------------------------------------------------------------------

# Next Steps

1.  Implement Event interface
2.  Implement EventListener
3.  Implement EventBus
4.  Integrate into PlatformServices
5.  Verify build
6.  Commit

``` text
feat(core): implement event bus
```

------------------------------------------------------------------------

## Revision History

  Version   Release   Date         Description
  --------- --------- ------------ ---------------------------
  1.0       Genesis   2026-06-29   Initial Event Bus design.

------------------------------------------------------------------------

© 2026 UGSO Open Source

Part of the Lovelace UV Platform.

This document evolves together with the project.
