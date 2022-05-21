import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DoubleMessage(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M29.967 17.983v6.667c0 .433-.017.85-.067 1.25-.383 4.5-3.033 6.733-7.916 6.733h-.667c-.417 0-.817.2-1.067.534l-2 2.666c-.883 1.184-2.316 1.184-3.2 0l-2-2.666c-.216-.284-.7-.534-1.067-.534h-.666c-5.317 0-7.984-1.316-7.984-7.983v-6.667c0-4.883 2.25-7.533 6.734-7.916.4-.05.816-.067 1.25-.067h10.666c5.317 0 7.984 2.667 7.984 7.983z"
				stroke={props.color}
				strokeWidth={2}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M36.633 11.317v6.666c0 4.9-2.25 7.534-6.733 7.917.05-.4.067-.817.067-1.25v-6.667c0-5.316-2.667-7.983-7.983-7.983H11.316c-.433 0-.85.017-1.25.067.383-4.484 3.033-6.734 7.916-6.734H28.65c5.317 0 7.983 2.667 7.983 7.984z"
				stroke={props.color}
				strokeWidth={2}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M10.826 22.083h.015m11.651 0h.015-.015zm-5.833 0h.015-.015z"
				stroke={props.color}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export default DoubleMessage;
