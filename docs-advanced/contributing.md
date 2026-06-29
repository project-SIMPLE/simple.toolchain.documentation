---
title: Contributing
sidebar_label: Contributing
sidebar_position: 7
description: Branch workflow, pull request conventions, code style, and testing guidance for SIMPLE contributors.
---

# Contributing

Contributions to SIMPLE are welcome across the WebPlatform, the GAMA plugin, the SIMPLE Unity Plugin, and the documentation site. Each component keeps its own build, review, and release workflow.

---

## Prerequisites

Before contributing:

- Build the component from source successfully. See [Building from Source](./building-from-source.md).
- Understand the architecture of the component you are changing. For the WebPlatform, see [WebPlatform Architecture](/advanced/webplatform/architecture).

---

## Branch workflow

1. Fork the relevant repository on GitHub.
2. Create a feature branch from the default branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Make your changes and commit with a descriptive commit message.
4. Push the branch to your fork and open a Pull Request against the upstream default branch.

---

## Pull request conventions

The `simple.webplatform` repository includes a PR template at `.github/PULL_REQUEST_TEMPLATE.md`. Fill it out fully: describe what changed, why, and how to test it.

Bug reports and feature requests are managed via GitHub Issues. The `simple.webplatform` repository provides issue templates in `.github/ISSUE_TEMPLATE/` for bug reports and feature requests.

---

## Code style

### WebPlatform

- TypeScript strict mode is enabled (`"strict": true` in `tsconfig.json`).
- ESLint is configured with `@typescript-eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.
- No dedicated `npm run lint` script is defined; run the linter with:
  ```bash
  npx eslint .
  ```
- Frontend components use React functional components with hooks.

### GAMA Plugin

- Java code follows Eclipse Tycho plugin conventions.
- Source encoding is UTF-8 (enforced in the parent POM via `project.build.sourceEncoding`).
- GAML source files reside in `gaml.extension.unity/gaml/` and model files in `gaml.extension.unity/models/`.

### SIMPLE Unity Plugin

- C# scripts follow Unity's standard naming conventions (PascalCase for classes and public members, camelCase for private fields).
- All `*Manager` scripts use the Singleton pattern. Never instantiate them manually — access them via `NameOfClassManager.Instance.SomeMethod()`.
- New interaction scripts should extend the appropriate `SimulationManager*` base class rather than modifying it directly.

---

## Testing

### WebPlatform

<!-- TODO: verify test runner and commands against source -->

### GAMA Plugin

Run the full Maven build including any integration tests:

```bash
cd "GAMA Plugin/eu.project-simple.parent"
mvn verify
```

### SIMPLE Unity Plugin

For package changes, verify the workflow in a clean Unity 6000.3.2f1 project:

1. Install the local package with **Package Manager > Add package from disk...**.
2. Run **GAMA > GAMA Panel > Default Setup**.
3. Generate a preview from a running GAMA experiment.
4. Enter Play Mode and confirm the Unity scene connects through the WebPlatform.
