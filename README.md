# NT Fukui 2025
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This repository contains the Lume-based static site for the NT Fukui 2025 event.

## Features

- Built with [Deno](https://deno.com/) and [Lume](https://lume.land/)
- Automatic build and deployment via GitHub Actions
- Responsive and accessible design
- Embedded Google Maps and event details

## Requirements

- [Deno](https://deno.com/runtime) installed

## Usage

- Start the development server: `deno task serve`
- Build the site: `deno task build`

## GitHub Actions

A GitHub Actions workflow is set up to automatically build and deploy the site on push or pull request to the `main` branch. The base path is set correctly for both the original repository and forks.

## License
This project is licensed under the [MIT License](LICENSE).
