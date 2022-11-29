import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Filter(props) {
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
				d='M2.186 3.496l7.036 10.322V22l5-3.636v-4.546l7.592-10.322c.428-.59.069-1.496-.594-1.496H2.78c-.663 0-1.022.905-.594 1.496z'
				stroke={props.color}
				strokeWidth={2}
				strokeMiterlimit={10}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default Filter;
