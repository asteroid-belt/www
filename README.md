# www

> The marketing website for [Asteroid Belt](https://asteroidbelt.co) — helping you adapt to an increasingly automation-driven future. Built with [Astro](https://astro.build), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com). Deployed to [Cloudflare Pages](https://pages.cloudflare.com).

## Prerequisites

- [Node.js](https://nodejs.org) 23.11.0 (see `.node-version`)
- [pnpm](https://pnpm.io)
- [Just](https://github.com/casey/just) task runner

## Getting Started

Install dependencies:

```sh
just install
```

Start the development server at `localhost:4321`:

```sh
just dev
```

## Usage

| Command        | Description                        |
| :------------- | :--------------------------------- |
| `just install` | Install dependencies               |
| `just dev`     | Start local dev server             |
| `just build`   | Build production site to `./dist/` |
| `just start`   | Build and preview locally          |
| `just lint`    | Lint source files                  |
| `just format`  | Format source files                |
| `just deploy`  | Full deploy pipeline to Cloudflare |

## Project Structure

```tree
src/
├── assets/        # Images and static assets
├── components/    # React and Astro components
│   └── ui/        # Reusable UI primitives
├── layouts/       # Page layout templates
├── lib/           # Utility functions
├── pages/         # File-based routing
└── styles/        # Global styles
scripts/
└── cloudflare/    # Deployment scripts
```

## Deployment

The site is deployed to Cloudflare Pages. CI runs on every push to `main` via GitHub Actions. Tagged releases (`v*.*.*`) trigger the full deployment pipeline.

Required secrets for deployment:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

## License

This project is licensed under the [MIT License](LICENSE).
