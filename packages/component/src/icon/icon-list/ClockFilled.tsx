import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ClockFilled(props) {
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
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5ZM12.38 8.01C12.38 7.59579 12.0442 7.26 11.63 7.26C11.2158 7.26 10.88 7.59579 10.88 8.01V12.11C10.88 12.5865 11.0414 13.0639 11.266 13.4578C11.4904 13.8513 11.8184 14.2324 12.2266 14.4746L12.2277 14.4752L15.3257 16.324C15.6814 16.5363 16.1418 16.42 16.354 16.0643C16.5663 15.7087 16.45 15.2482 16.0943 15.036L12.9943 13.186L12.9924 13.1848C12.861 13.1069 12.6994 12.9434 12.569 12.7147C12.4386 12.4861 12.38 12.2635 12.38 12.11V8.01Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default ClockFilled;
