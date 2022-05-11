# Bluelearn Design System

## Steps to run the project
1. **```npm i```** -  in the root folder
2. **```npm run build```** -  in the root folder
3. **```npm run dev/yarn dev```** -  in the following sequence (schema, theme and component) 
4. **```npm run storybook-start```** -  to the start the storybook server

*Note:* Run ```npm run storybook-build``` if **step 4** fails

## Steps for adding a new SVG Icon
 1. Copy an icon from the figma file
 2. Convert it into React Native SVG using https://transform.tools/svg-to-react-native
 3. Create a new file with the same name as the component in the "/component/src/icon/icon-list"
 4. Change the width, height and color/fill attributes with `width={props.size} height={props.size} fill={props.color}`
 5. Add the name of the icon in "/schema/src/icon/index.ts"
 6. Add the name and icon component in "/theme/src/icons/index.ts" (Make sure you don't forget to import the icon from components repo)
