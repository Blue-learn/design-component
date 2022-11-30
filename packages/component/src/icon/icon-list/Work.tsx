import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Work(props) {
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
				d='M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V4c0-.118-.21-.786-.586-.87A6.892 6.892 0 0014 3h-4c-.53 0-1.04.047-1.414.13C8.21 3.214 8 3.882 8 4v3'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default Work;
