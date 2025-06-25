# Portland Apps Monorepo

This repository contains the apps for Portland.gov, managed as a monorepo.

Current apps:

- City Calendar

## Getting started

### 1. Open the dev container

- Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) in VS Code.
- Open this repository in [VS Code](https://code.visualstudio.com/).
- When VS Code prompts you, build and start the dev container. If not, use Ctrl+Shift+P and search "open dev container".

### 2. Install dependencies

```sh
pnpm install
```

### 3. Run apps

#### City Calendar App

```sh
cd apps/city-calendar
pnpm dev
```

### 4. Open in browser

Open the app at http://localhost:3000 (this URL should also be printed in your terminal after running the app).

### Component Library

```sh
cd packages/portland-component-library
# for development
pnpm dev
# for building the library
pnpm build
```
---

## Notes

- Use `pnpm` for all package management tasks.
