import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function LeftChevron(props) {
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
				d='M7.97748 11.2065C7.97748 10.9025 8.08948 10.5985 8.32948 10.3585L13.9775 4.71052C14.4415 4.24652 15.2095 4.24652 15.6735 4.71052C16.1375 5.17452 16.1375 5.94252 15.6735 6.40652L10.8735 11.2065L15.6735 16.0065C16.1375 16.4705 16.1375 17.2385 15.6735 17.7025C15.2095 18.1665 14.4415 18.1665 13.9775 17.7025L8.32948 12.0545C8.08948 11.8145 7.97748 11.5105 7.97748 11.2065Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default LeftChevron;
