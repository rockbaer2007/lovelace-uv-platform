---
Project: Lovelace UV Platform
Document: Component Design – Resource Model
Document ID: CORE-010
Version: 1.0
Status: Draft
Release: Genesis
---

# CORE-010 – Resource Model

## Resource

A Resource represents business data independent from its origin.

Examples

- WeatherResource
- UVResource
- ForecastResource
- PoolResource
- AirQualityResource

## ResourceResult

```ts
export interface ResourceResult<T> {
    readonly status: ResourceStatus;
    readonly data?: T;
    readonly timestamp: Date;
    readonly error?: Error;
}
```

## ResourceStatus

```ts
export enum ResourceStatus {
    Ready,
    Loading,
    Error,
    Unavailable
}
```

## Goals

- Uniform error handling
- Caching support
- Offline support
- Future refresh strategies
