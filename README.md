# Astro-Tailwind Monorepo

Welcome to HarmonyMonolith, an example project showcasing an Astro site integrated with a Tailwind CSS component library, all managed within a PNPM workspace. This setup enables efficient development and collaboration while harnessing the power of hot reload.

## Features

- **Astro Site**: An Astro site that utilizes components from the Tailwind CSS component library.
- **Tailwind Component Library**: A collection of reusable components styled with Tailwind CSS.
- **PNPM Workspace**: A monorepo structure managed by PNPM, facilitating seamless development and dependency management.

## Getting Started

for more information on how to get started with this project, please refer to the [setup guide](docs/setup.md).

```bash
cd docs/setup.md
```

# Changesets

A changeset is a piece of information about changes made in a branch or commit. It holds three bits of information:

- What we need to release
- What version we are releasing packages at (using a semver bump type)
- A changelog entry for the released packages

## Semver

## Adding a changeset

1. Run the command `pnpm changeset` or `pnpm changeset --empty` without doing any releases.
2. Select the packages you want to include in the changeset using ↑ and ↓ to navigate to packages, and space to select a package. Hit enter when all desired packages are selected.
3. You will be prompted to select a bump type for each selected package. Select an appropriate bump type for the changes made.
4. Your final prompt will be to provide a message to go alongside the changeset.

## Releasing changes

1. Run `pnpm changeset version`. This will bump the versions of the packages previously specified with pnpm changeset (and any dependents of those) and update the changelog files.
2. Run pnpm install. This will update the lockfile and rebuild packages.
3. Commit the changes.
4. Run `pnpm publish -r`. This command will publish all packages that have bumped versions not yet present in the registry.

## Automating Changesets

Do we want a blocking or non blocking approach ?
