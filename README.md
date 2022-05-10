# design-component

## Steps for adding a new SVG Icon
 1. Copy an icon from the figma file
 2. Convert it into React Native SVG using https://transform.tools/svg-to-react-native
 3. Create a new file with the same name as the component in the "/component/src/icon/icon-list"
 4. Change the width, height and color/fill attributes with `width={props.size} height={props.size} fill={props.color}`
 5. Add the name of the icon in "/schema/src/icon/index.ts"
 6. Add the name and icon component in "/theme/src/icons/index.ts" (Make sure you don't forget to import the icon from components repo)