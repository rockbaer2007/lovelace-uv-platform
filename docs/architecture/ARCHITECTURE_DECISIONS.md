---
Project: Lovelace UV Platform
Document: Architecture Decisions
Version: 1.0
Status: Living Document
Release: Genesis
---

# Architecture Decisions

## AD-001
Registry uses a configurable key selector instead of requiring a fixed RegistryItem type.

## AD-002
Public APIs are separated from internal implementations.

## AD-003
Plugins are managed exclusively through PluginManager.

## AD-004
Providers return ResourceResult<T> instead of raw data.

## AD-005
Resources represent business models independent of their source.

## AD-006
Equivalent subsystems expose equivalent lifecycle APIs.

## AD-007
PlatformCore coordinates components but should contain minimal business logic.

## AD-008
All public APIs are documented before implementation.
