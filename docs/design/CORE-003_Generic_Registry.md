---
Document: Component Design -- Generic Registry
Document ID: CORE-003
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

# CORE-003 -- Generic Registry

## Purpose

Design the generic registry that will be used by the Platform Core to
register and manage platform components.

The registry provides a reusable infrastructure component and contains
no business logic.

------------------------------------------------------------------------

## Related Documents

-   DOC-003 -- Architecture
-   DOC-004 -- Roadmap
-   DOC-005 -- Coding Guidelines
-   P-001 -- Platform Core Independence
-   P-002 -- Business Logic Belongs to Plugins
-   P-003 -- Providers Only Deliver Data

------------------------------------------------------------------------

# Responsibilities

The Generic Registry is responsible for:

-   Registering components
-   Removing components
-   Looking up components by identifier
-   Enumerating registered components
-   Providing a simple and stable API

The registry must remain generic and reusable.

------------------------------------------------------------------------

# Public API

``` ts
register(item: T): void

unregister(id: string): boolean

get(id: string): T | undefined

has(id: string): boolean

getAll(): readonly T[]

clear(): void

get size(): number
```

------------------------------------------------------------------------

# Design Decisions

-   Uses TypeScript generics (`Registry<T>`).
-   Stores items internally using `Map<string, T>`.
-   Each registered item must expose a unique `id`.
-   No Home Assistant dependencies.
-   No provider or plugin specific code.

------------------------------------------------------------------------

# Future Extensions

Potential future additions:

-   keys()
-   values()
-   find()
-   filter()
-   freeze()
-   read-only registry views

These extensions must remain backward compatible.

------------------------------------------------------------------------

# Acceptance Criteria

-   Generic implementation
-   Provider-independent
-   Unit-testable
-   No business logic
-   Fully documented
-   Passes project build

------------------------------------------------------------------------

# Next Steps

1.  Implement `RegistryItem`
2.  Implement `Registry<T>`
3.  Export registry module
4.  Build and verify
5.  Commit: `feat(core): implement generic registry`

------------------------------------------------------------------------

## Revision History

  Version   Release   Date         Description
  --------- --------- ------------ ---------------------------
  1.0       Genesis   2026-06-29   Initial component design.

------------------------------------------------------------------------

© 2026 UGSO Open Source

Part of the Lovelace UV Platform.

This document evolves together with the project.
