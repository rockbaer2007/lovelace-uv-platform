---
Project: Lovelace UV Platform
Document: Architecture – Data Flow
Document ID: CORE-011
Version: 1.0
Status: Draft
Release: Genesis
---

# CORE-011 – Platform Data Flow

## Purpose

Define the permitted flow of data through the platform.

## Canonical Flow

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

## Layer Rules

- Providers load resources.
- Resources contain business data only.
- Plugins process resources.
- Layouts arrange resources for presentation.
- Renderers display layouts.
- Renderers must never communicate with Providers directly.
- Providers must never render UI.

## Dependency Rules

Allowed:

Provider → Resource
Plugin → Provider
Layout → Resource
Renderer → Layout

Forbidden:

Renderer → Provider
Renderer → PlatformCore
Layout → Provider
Provider → Renderer

## Design Goals

- Clear separation of concerns
- Testability
- Replaceable implementations
- UI independence
- Home Assistant independence
