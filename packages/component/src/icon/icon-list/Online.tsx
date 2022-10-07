import * as React from 'react';
import Svg, { Path , Circle} from 'react-native-svg';

function Online(props) {
	return (
		<Svg
			width={17}
			height={16}
			viewBox='0 0 17 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Circle
				r={8}
				transform='matrix(1 0 0 -1 8.5 7.999)'
				fill='#00BA88'
			/>
		</Svg>
	);
}

export default Online;
