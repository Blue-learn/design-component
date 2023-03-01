import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function AddChat(props) {
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
				d='M10 2h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V16z'
				fill={props.color}
			/>
			<Path
				clipRule='evenodd'
				d='M9 10c0-.184.174-.333.389-.333h6.222c.215 0 .389.149.389.333 0 .184-.174.333-.389.333H9.39C9.174 10.333 9 10.184 9 10z'
				stroke={props.color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				clipRule='evenodd'
				d='M12.5 7c.215 0 .389.15.389.333v5.334c0 .184-.174.333-.389.333-.215 0-.389-.15-.389-.333V7.333c0-.184.174-.333.389-.333z'
				stroke={props.color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default AddChat;
