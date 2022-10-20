import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Work(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox="0 0 25 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M8 4h.5V2.75c0-.464.184-.91.513-1.237l-.354-.354.354.354A1.75 1.75 0 0110.25 1h4.5a1.75 1.75 0 011.75 1.75V4h5.75A1.75 1.75 0 0124 5.75v12a1.75 1.75 0 01-1.75 1.75H2.75A1.75 1.75 0 011 17.75v-12A1.75 1.75 0 012.75 4H8zm7.5 0h.5V2.75a1.25 1.25 0 00-1.25-1.25h-4.5A1.25 1.25 0 009 2.75V4h6.5zm8 5.726v-.65l-.629.167-9.92 2.645s0 0 0 0a1.75 1.75 0 01-.901 0L2.129 9.242 1.5 9.074v8.676A1.25 1.25 0 002.75 19h19.5a1.25 1.25 0 001.25-1.25V9.726zm-.371-1.069l.371-.099V5.75a1.25 1.25 0 00-1.25-1.25H2.75A1.25 1.25 0 001.5 5.75v2.808l.371.1 10.306 2.747c.212.056.434.056.646 0l10.306-2.748z"
				stroke={props.color}
			/>
		</Svg>
	);
}

export default Work;
