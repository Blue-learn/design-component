import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Edit(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M13.7548 7.18924L16.8095 10.244L7.41622 19.6372H4.3615V16.5825L13.7548 7.18924ZM14.8239 6.12009L16.5804 4.36363L19.6351 7.41835L17.8786 9.17481L14.8239 6.12009Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Edit;
