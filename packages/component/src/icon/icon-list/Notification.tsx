import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function NotificationIcon(props) {
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
				d='M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6z'
				stroke={props.color}
				strokeWidth={2}
				strokeMiterlimit={10}
				strokeLinecap='round'
			/>
			<Path
				d='M13.87 3.2a6.754 6.754 0 00-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26z'
				stroke={props.color}
				strokeWidth={2}
				strokeMiterlimit={10}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 01-.88-2.12'
				stroke={props.color}
				strokeWidth={2}
				strokeMiterlimit={10}
			/>
		</Svg>
	);
}

export default NotificationIcon;
