# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Nothing yet.

## [1.0.7] - 2026-07-06

### Added

- CI: three workflows covering lint / type-check / test / build, a dependency
  audit, a secret scan, deploy, and a Storybook publish.
- Jest runner across the lerna monorepo and 68 test suites spanning the
  component, schema and theme packages.
- README documenting setup, architecture, environment and usage, and a
  `CONTRIBUTING.md`.
- This changelog. Earlier `v0.0.x` tags exist in git history but were published
  without release notes; `1.0.7` is the first documented release.

### Fixed

- Made lint work across the workspace, and fixed the eight real bugs it found.

### Removed

- Committed secrets purged from the working tree.
