# CloudGuard Scene Screening

A React and TypeScript interface prototype for reviewing Sentinel-2 cloud and
shadow screening workflows, built with Vite and Tailwind CSS.

## Project status

The app demonstrates analysis, results, model performance, methodology,
processing, and input-error screens. Scene statistics, masks, model information,
and progress are illustrative fixtures. GeoTIFF ingestion, model inference, and
report or mask downloads are not implemented. Some controls are visual
placeholders. The layout currently targets desktop screens at least 1180 px wide.

Sample images load from Unsplash, and fonts load from Google Fonts. Those assets
require an internet connection. No API keys or backend services are required.

## Local setup

Use Node.js 22.12 or newer and pnpm 10.34.3. The `.mise.toml` file also declares
the development tools for users of mise.

```sh
npm install --global pnpm@10.34.3
pnpm install --frozen-lockfile
pnpm dev
```

Open <http://localhost:8443>. The initial view is the results screen; use the
sidebar to explore the other screens.

## Validation and build

```sh
pnpm check
pnpm build
pnpm preview
```

`pnpm check` runs TypeScript checks. `pnpm build` checks types
before producing the static site in `dist/`. The preview server uses port 8443,
so stop the development server before starting it. There is currently no
automated browser or unit test suite.

Run `pnpm format` to apply formatting. Commit `pnpm-lock.yaml` with dependency
changes and use `pnpm install --frozen-lockfile` for reproducible installs.
Install dependencies on each machine rather than copying `node_modules` between
operating systems; the build tools use platform-specific native packages.

## Configuration

The app works without an `.env` file. The Vite config reads these optional
variables from the shell environment:

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `8443` | Development and preview server port. |
| `FIGMA_DEV_SERVER_HOST` | `0.0.0.0` | Development and preview bind address. |
| `FIGMA_PUBLIC_URL` | Unset | Public base URL or path for built assets. |

Page metadata and Figma publishing options live in `.figma/make/site.json`.
Keep `.figma/` committed: its scripts support the Figma Make and Code Layers
development and publishing workflow.

## Source layout

- `src/App.tsx`: screens, sample data, and shared interface components.
- `src/index.css`: typography, layout, and component styles.
- `src/main.tsx`: React entry point.
- `public/`: static assets.
- `vite.config.ts`: Vite, Tailwind, and Figma integration.

## Before pushing

Run `pnpm check` and `pnpm build`, then review `git status` and the staged diff.
Keep generated output, dependencies, local credentials, and `.env` files out of
commits; `.gitignore` excludes them. An `.env.example` may be committed if needed,
provided it contains placeholders only.

The root `.gitattributes` routes binary assets through Git LFS. If adding images,
rasters, or model weights, install and configure Git LFS before staging them.
The bundled favicon has an explicit exception in `public/.gitattributes`.

## License

The project source code is licensed under the [MIT License](LICENSE).
Third-party dependencies, sample imagery, fonts, and datasets retain their
respective licenses.
