import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function UpArrow(props) {
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
				d='M12.5 7.518c-.304 0-.608.112-.848.352l-5.648 5.647a1.207 1.207 0 000 1.697 1.207 1.207 0 001.696 0l4.8-4.8 4.8 4.8a1.207 1.207 0 001.696 0 1.207 1.207 0 000-1.697L13.348 7.87a1.187 1.187 0 00-.848-.352z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default UpArrow;
