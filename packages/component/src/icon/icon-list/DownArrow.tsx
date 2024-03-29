import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DownArrow(props) {
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
				d='M12 16.816c-.304 0-.608-.113-.848-.352l-5.648-5.648a1.207 1.207 0 010-1.697 1.207 1.207 0 011.696 0l4.8 4.8 4.8-4.8a1.207 1.207 0 011.696 0 1.207 1.207 0 010 1.697l-5.648 5.647c-.24.24-.544.352-.848.352z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default DownArrow;
