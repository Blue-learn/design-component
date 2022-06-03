import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Download(props) {
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
				d='M12.122 15.436V3.396m0 12.04l2.916-2.928m-2.916 2.928l-2.916-2.928M16.755 8.128h.933a3.684 3.684 0 013.684 3.685v4.884a3.675 3.675 0 01-3.675 3.675H6.557a3.685 3.685 0 01-3.685-3.685v-4.885a3.675 3.675 0 013.675-3.674h.942'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default Download;
