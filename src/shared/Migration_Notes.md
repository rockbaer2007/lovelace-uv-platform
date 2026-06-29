# Migration Notes

Suggested future refactor:

PluginMetadata:
- extends Identifiable
- extends Named
- extends Versioned
- extends Described

Plugin:
- extends Initializable
- extends Startable
- extends Stoppable
- extends Disposable

The same contracts can later be reused by Providers, Layouts and Themes.
