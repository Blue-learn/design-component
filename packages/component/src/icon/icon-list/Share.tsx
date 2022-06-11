import * as React from 'react';
import Svg, {
	Circle,
	Path,
} from 'react-native-svg';

function Share(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M21.25 5.779a2.36 2.36 0 11-4.722 0 2.36 2.36 0 014.721 0zM8.807 12a2.36 2.36 0 11-4.721 0 2.36 2.36 0 014.721 0z'
				stroke={props.color}
				strokeWidth={1.5}
			/>
			<Circle
				cx={18.8889}
				cy={18.2211}
				r={2.36056}
				stroke={props.color}
				strokeWidth={1.5}
			/>
			<Path
				d='M16.297 6.816l-7.258 4.147m0 2.074l7.258 4.147'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap='round'
			/>
		</Svg>
	);
}

export default Share;
