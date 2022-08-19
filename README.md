# Bluelearn Design System

### Table of contents
   
  - [Getting Started](#getting-started)
  - [Steps for adding a new component](#steps-for-adding-a-new-component)
  - [Steps for adding a new SVG Icon](#steps-for-adding-a-new-svg-icon)

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
