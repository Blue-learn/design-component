# Bluelearn Design System

Lerna monorepo holding the three packages that make up the Bluelearn design
system: components, their schema, and the theme tokens. Published to npm and
consumed by `bluelearn-app` via `@blue-learn/platform`.

| Package | Path | What it is |
|---|---|---|
| `@blue-learn/component` | `packages/component` | React Native components and icons |
| `@blue-learn/schema` | `packages/schema` | Types describing every component's props |
| `@blue-learn/theme` | `packages/theme` | Light/dark token sets |

### Table of contents

  - [Getting Started](#getting-started)
  - [Steps for adding a new component](#steps-for-adding-a-new-component)
  - [Steps for adding a new SVG Icon](#steps-for-adding-a-new-svg-icon)
  - [Architecture](#architecture)
  - [Usage](#usage)
  - [API](#api)
  - [Environment](#environment)
  - [Contributing](#contributing)

## Getting Started
First you have to install all the dependencies that are available in the root folder using
```sh
yarn setup
```

Install all the dependencies that are available inside components, schema and theme using
```sh
yarn setup
```

Build all the three packages(i.e component,schema,theme) using 
```sh
yarn build
```

Start the storybook using 
```sh
yarn storybook-start
```
Now storybook will run in local server at http://localhost:6006/ and all the components will render inside that and one can change the props to customize components and test it out.

If you want to deploy the storybook to components.bluelearn.in then run the following command
```sh
yarn storybook-deploy
```

## Steps for adding a new component
1. Create a new folder for that component in `packages/component/src` then add parent file `component.tsx` and base file `component.base.tsx` for that component as per requirement and add stories file `component.stories.tsx` and mock file `component.mock.tsx` inside that folder to render that component in storybook.
2. Create Schema for that component inside `packages/schema/src` and define schema for base as well as parent component as per requirement. 
3. Create theme for that component inside `packages/theme/src/light-mobile`.First define attributes for `light theme` and then change the color and as per requirement for `dark theme` in `packages/theme/src/dark-mobile`

## Steps for adding a new SVG Icon
 1. Copy an icon from the figma file
 2. Convert it into React Native SVG using https://transform.tools/svg-to-react-native
 3. Create a new file with the same name as the component in the `packages/component/src/icon/icon-list`
 4. Change the width, height and color/fill attributes with `width={props.size}` `height={props.size}` `fill={props.color}`
 5. Add the name of the icon in `packages/schema/src/icon/index.ts`
 6. Add the name and icon component in `packages/theme/src/icons/index.ts` (Make sure you don't forget to import the icon from components repo)

## Architecture

```
packages/
  component/   React Native components + icon list
  schema/      Prop types for every component
  theme/       light-mobile / dark-mobile token sets, icon registry
docs/          Supporting documentation
fonts/         Bundled font files
scripts/       Build and release tooling
test-mocks/    Shared mocks for the Jest suites
```

Each component is split into a **parent** (`component.tsx`) and a **base**
(`component.base.tsx`). The parent resolves theme tokens and schema defaults; the
base is presentational. That split is what lets `@blue-learn/platform` render a
component from a server-supplied schema without the component knowing where its
props came from.

The three packages are versioned and published together through Lerna, because a
component change usually implies a schema and theme change.

## Usage

```ts
import { Button } from '@blue-learn/component';
import { ButtonSchema } from '@blue-learn/schema';
```

Consumers normally do not import these directly — they describe a screen in schema
and let `@blue-learn/platform` render it.

Storybook is the reference for what exists and what props each component takes:

```bash
yarn storybook-start     # http://localhost:6006
```

## API

Each package re-exports from its `src/index`. Component props are defined once in
`@blue-learn/schema` and imported by both the component and the renderer, so there
is a single source of truth for a component's surface.

## Environment

None — no package reads environment variables. Storybook deployment credentials are
supplied by CI, not by a local `.env`.

## Contributing

Run `yarn lint && yarn test` before opening a PR. New components need a story and a
mock so they render in Storybook.

Two known issues, currently pinned by tests that describe present behaviour rather
than intended behaviour:

- `Button.onPress` never fires on web — the `disabled` prop interacts badly with
  react-native-web's `PressResponder`.
- `TextInput.triggerAction` **replaces** `action.payload` instead of merging it.
