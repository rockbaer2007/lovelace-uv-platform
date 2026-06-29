# Contributing

## Development Workflow

Every change follows this order:

1. Architecture
2. Documentation
3. Implementation
4. Verification
5. Commit

## Definition of Done

- Architecture reviewed
- Public API documented
- TypeScript compiles (`npm run check`)
- Build succeeds (`npm run build`)
- Documentation updated
- Changelog updated
- Commit created

## Architecture Rules

- Public APIs never depend on internal implementations.
- Foundation contains only generic concepts.
- New subsystems follow the established Manager / Context / Metadata pattern.
