import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Text(props) {
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
				fillRule='evenodd'
				clipRule='evenodd'
				d='M13 19H15C15.552 19 16 19.448 16 20C16 20.552 15.552 21 15 21H9C8.448 21 8 20.552 8 20C8 19.448 8.448 19 9 19H11V5H5V7C5 7.552 4.552 8 4 8C3.448 8 3 7.552 3 7V4C3 3.448 3.448 3 4 3H20C20.552 3 21 3.448 21 4V7C21 7.552 20.552 8 20 8C19.448 8 19 7.552 19 7V5H13V19Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Text;
