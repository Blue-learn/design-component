import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Assignment(props) {
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
				d='M9.172 4a3.002 3.002 0 015.657 0h2.672c.663 0 1.297.264 1.766.733.47.469.734 1.105.734 1.768v13a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 19.5v-13A2.5 2.5 0 016.5 4h2.671zm3.83 14h2a1.001 1.001 0 000-2h-2a1 1 0 000 2zm-4-4h6a1.001 1.001 0 000-2h-6a1 1 0 000 2zm0-4h6a1.001 1.001 0 000-2h-6a1 1 0 000 2z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Assignment;
