import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function EditOutline(props) {
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
				d='M5.11145 16.8932L13.7547 8.24992L15.7488 10.244L7.10551 18.8872H5.11145V16.8932ZM15.8845 6.12011L16.5803 5.42431L18.5744 7.41836L17.8786 8.11417L15.8845 6.12011Z'
				stroke={props.color}
				strokeWidth={1.5}
			/>
		</Svg>
	);
}

export default EditOutline;
