---
Document: Coding Guidelines
Document ID: DOC-005
Language: English
Last Updated: 2026-06-29
License: MIT
Maintainer: UGSO Open Source Team
Organization: UGSO Open Source
Project: Lovelace UV Platform
Release: Genesis
Status: Active
Version: 1.1
---

# Coding Guidelines

## Purpose

Define the coding conventions and development practices used throughout
the Lovelace UV Platform.

------------------------------------------------------------------------

## Related Documents

-   DOC-000 -- Documentation Standard
-   DOC-001 -- Project Constitution
-   DOC-003 -- Architecture
-   DOC-004 -- Roadmap

------------------------------------------------------------------------

# General Principles

-   Readability over cleverness.
-   Simplicity over complexity.
-   Consistency over personal preference.
-   Architecture before implementation.
-   Documentation is part of the product.

------------------------------------------------------------------------

# TypeScript

-   Use TypeScript for all source code.
-   Enable strict type checking.
-   Avoid `any` whenever possible.
-   Prefer interfaces for public APIs.
-   Export named classes and functions only.

------------------------------------------------------------------------

# Project Structure

-   One public class per file.
-   One responsibility per class.
-   Keep modules small and focused.
-   Avoid circular dependencies.

------------------------------------------------------------------------

# Naming Conventions

## Classes

Use PascalCase.

## Methods

Use camelCase.

## Constants

Use UPPER_SNAKE_CASE.

## Files

Use PascalCase for class files.

------------------------------------------------------------------------

# Imports

-   Prefer relative imports inside the project.
-   Remove unused imports.
-   Group and order imports consistently.

------------------------------------------------------------------------

# Comments

-   Explain **why**, not **what**.
-   Keep comments up to date.
-   Remove obsolete comments.

------------------------------------------------------------------------

# Error Handling

-   Fail early.
-   Throw meaningful errors.
-   Never silently ignore failures.

------------------------------------------------------------------------

# Git Workflow

-   One feature = one commit.
-   Keep commits focused.
-   The `main` branch must always build successfully.
-   Write clear commit messages.

------------------------------------------------------------------------

# Platform Architecture Rules

These rules are specific to the Lovelace UV Platform.

  -----------------------------------------------------------------------
  ID                           Rule
  ---------------------------- ------------------------------------------
  P-001                        The Platform Core must remain
                               provider-independent.

  P-002                        Business logic belongs to plugins.

  P-003                        Providers only collect and normalize data.

  P-004                        Layouts never fetch data directly.

  P-005                        Registries contain no business logic.

  P-006                        Public APIs should remain backward
                               compatible whenever possible.

  P-007                        The Platform Core must not depend on Home
                               Assistant entities.

  P-008                        Every extension must be optional.

  P-009                        Prefer composition over inheritance.

  P-010                        Every class should have a single
                               responsibility.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# Code Review Checklist

Before committing:

-   Build succeeds
-   No TypeScript errors
-   Documentation updated
-   No unused code
-   Naming follows the guidelines
-   Platform Rules are respected

------------------------------------------------------------------------

# Guiding Principle

Write code that is easy to understand, easy to extend and easy to
maintain.

------------------------------------------------------------------------

## Revision History

  Version   Release   Date         Description
  --------- --------- ------------ ------------------------------------
  1.1       Genesis   2026-06-29   Added Platform Architecture Rules.
  1.0       Genesis   2026-06-29   Initial coding guidelines.

------------------------------------------------------------------------

© 2026 UGSO Open Source

Part of the Lovelace UV Platform.

This document evolves together with the project.
