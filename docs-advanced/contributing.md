---
title: Contributing
sidebar_label: Contributing
sidebar_position: 6
description: Branch workflow, pull request conventions, code style, and testing guidance for SIMPLE contributors.
---

# Contributing

Contributions to SIMPLE are welcome across all three components. Each component lives in its own subdirectory of the `simple.toolchain` or `simple.webplatform` repository.

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

### Unity Template VR

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

### Unity Template VR

The Unity Test Runner is referenced in the CI workflow (`game-ci/unity-builder@v4` on Ubuntu runners). Running tests locally requires a valid Unity license configured in the editor.
