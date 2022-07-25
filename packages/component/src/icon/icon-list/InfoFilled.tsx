import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function InfoFilled(props) {
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
				d='M11.998 2c-5.525 0-10 4.475-10 10 0 5.524 4.475 10 10 10s10-4.476 10-10c0-5.525-4.475-10-10-10zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default InfoFilled;
