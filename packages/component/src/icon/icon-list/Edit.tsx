import * as React from 'react';
import Svg, {Path} from "react-native-svg";

function EditIcon(props) {
	return (
	<Svg
		width={props.size}
		height={props.size}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<Path d="M9.755 3.19l3.054 3.054-9.393 9.393H.362v-3.055L9.755 3.19zm1.069-1.07L12.58.364l3.055 3.054-1.756 1.757-3.055-3.055z" fill={props.color} />
	</Svg>
	);
}

export default EditIcon;
