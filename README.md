# nt-fukui.jp

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

The official landing page for the NT Fukui 2025 tech festival. This repository contains the source code for the site, built with Deno and Lume.

NT ふくいの LP リポジトリです。

## Live Demo

➡️ **[nt-fukui.jp](https://nt-fukui.jp)**


![A screenshot of the nt-fukui.jp website, showing the main banner for "NTふくい 2025", followed by sections detailing event information (dates, location, map)
, workshop schedules, and a sitemap with links to related events and past sites.](https://nt-fukui.jp/assets/ntfukui2025.png)

## Features

-   **Static Site Generation**: Built with [Lume](https://lume.land/), a fast and flexible static site generator for Deno.
-   **React Integration**: Uses [React](https://react.dev/) for component-based UI, with Server-Side Rendering (SSR) and client-side hydration.
-   **Utility-First CSS**: Styled with [Tailwind CSS](https://tailwindcss.com/) for a modern and responsive design.
-   **Automated Deployment**: Continuous deployment to GitHub Pages is configured via [GitHub Actions](https://github.com/features/actions).
-   **Fork-Friendly**: The deployment workflow automatically adjusts the site's base path, allowing forks to deploy correctly to their own GitHub Pages.
-   **Developer Tooling**: Includes pre-commit hooks for automatic code formatting (`deno fmt`) and linting (`deno lint`).

## Tech Stack

-   **Runtime**: [Deno](https://deno.com/)
-   **Static Site Generator**: [Lume](https://lume.land/)
-   **UI Framework**: [React](https://react.dev/)
-   **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
-   **Bundler**: [esbuild](https://esbuild.github.io/) (via Lume plugin)

## Getting Started

### Prerequisites

-   [Deno](https://deno.com/) (v2.x or later)
    -   Installation guide: <https://docs.deno.com/runtime/>

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/code4fukui/nt-fukui.jp.git
    cd nt-fukui.jp
    ```

2.  (Optional but recommended) Initialize Git pre-commit hooks to enable auto-formatting and linting:
    ```bash
    deno task init-hooks
    ```

## Usage

### Development

To start the local development server with live reloading:

```bash
deno task serve
```

The site will be available at `http://localhost:20052`.

### Production Build

To generate the static site for production:

```bash
deno task build
```

The output will be generated in the `_site/` directory.

## Directory Structure

-   `_site/`: The generated static website. This directory is not tracked by Git.
-   `src/`: Contains all source files (pages, components, assets) that are processed by Lume.
-   `_config.ts`: Lume configuration file, defining plugins and the build pipeline.
-   `deno.jsonc`: Deno configuration, including import maps and task runner scripts.
-   `.github/workflows/`: Defines the CI/CD pipeline for deploying to GitHub Pages.

## Deployment

The project is automatically built and deployed to GitHub Pages on every push to the `main` branch.

The GitHub Actions workflow is configured to handle deployments for both the original repository and any forks. For forked repositories, it automatically sets the correct `BASE_PATH` so that all asset links work correctly on the fork's GitHub Pages URL (e.g., `https://<user>.github.io/nt-fukui.jp`).

## Attribution

This project is organized by the NT Sabae Organizing Committee and maintained by [Code for FUKUI](https://github.com/code4fukui).

## License

This project is unlicensed.