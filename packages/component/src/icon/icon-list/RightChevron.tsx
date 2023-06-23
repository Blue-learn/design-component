import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function RightChevron(props) {
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
				d='M16.0225 12.7935C16.0225 13.0975 15.9105 13.4015 15.6705 13.6415L10.0225 19.2895C9.55852 19.7535 8.79052 19.7535 8.32652 19.2895C7.86252 18.8255 7.86252 18.0575 8.32652 17.5935L13.1265 12.7935L8.32652 7.99348C7.86252 7.52948 7.86252 6.76148 8.32652 6.29748C8.79051 5.83348 9.55852 5.83348 10.0225 6.29748L15.6705 11.9455C15.9105 12.1855 16.0225 12.4895 16.0225 12.7935Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default RightChevron;
