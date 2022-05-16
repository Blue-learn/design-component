import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PlusCircleIcon(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M10 0C4.49 0 0 4.49 0 10s4.49 10 10 10 10-4.49 10-10S15.51 0 10 0zm4 10.75h-3.25V14c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V6c0-.41.34-.75.75-.75s.75.34.75.75v3.25H14c.41 0 .75.34.75.75s-.34.75-.75.75z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default PlusCircleIcon;
