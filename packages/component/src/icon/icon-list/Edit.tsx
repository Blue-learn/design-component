import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function EditIcon(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 19 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M16.06.59l1.35 1.35c.79.78.79 2.05 0 2.83L4.18 18H0v-4.18L10.4 3.41 13.23.59c.78-.78 2.05-.78 2.83 0zM2 16l1.41.06 9.82-9.83-1.41-1.41L2 14.64V16z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default EditIcon;
