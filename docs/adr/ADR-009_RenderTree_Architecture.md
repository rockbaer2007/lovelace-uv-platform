# ADR-009 – RenderTree Architecture

Status: Accepted

Decision:
Renderers never consume LayoutTree directly.
They always consume a RenderTree produced by a LayoutCompiler.
