import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PlayIcon(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 12 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M12 8.001c0 .359-.366.617-.366.617L1.361 14.982c-.749.49-1.361.127-1.361-.803V1.822C0 .89.612.53 1.362 1.018l10.273 6.366c-.001 0 .365.258.365.617z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default PlayIcon;
