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
			viewBox='0 0 24 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M20.582 6.279a2.36 2.36 0 11-4.721 0 2.36 2.36 0 014.72 0zM8.14 12.5a2.36 2.36 0 11-4.722 0 2.36 2.36 0 014.721 0z'
				stroke={props.color}
				strokeWidth={1.5}
			/>
			<Circle
				cx={18.2211}
				cy={18.7211}
				r={2.36056}
				stroke={props.color}
				strokeWidth={1.5}
			/>
			<Path
				d='M15.63 7.316L8.37 11.463m0 2.074l7.258 4.147'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap='round'
			/>
		</Svg>
	);
}

export default Share;
