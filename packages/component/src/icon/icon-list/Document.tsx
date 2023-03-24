import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Document(props) {
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
				d='M19.5 10.371V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5v-15a2.25 2.25 0 012.25-2.25h4.629a1.5 1.5 0 011.06.44l6.622 6.62a1.5 1.5 0 01.439 1.061z'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinejoin='round'
			/>
			<Path
				d='M12 2.625V8.25a1.5 1.5 0 001.5 1.5h5.625'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default Document;
