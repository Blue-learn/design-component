import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function Hat(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<G clipPath='url(#clip0_508_5654)'>
				<Path
					d='M12 4.4L1.875 9.8L12 15.2L22.125 9.8L12 4.4Z'
					stroke={props.color}
					strokeMiterlimit={10}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<Path
					d='M5.925 11.9609V16.5509C5.925 18.0359 8.625 19.9259 12 19.9259C15.375 19.9259 18.075 18.0359 18.075 16.5509V11.9609'
					stroke={props.color}
					strokeMiterlimit={10}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<Path
					d='M22.125 9.8V18.575'
					stroke={props.color}
					strokeMiterlimit={10}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</G>
		</Svg>
	);
}

export default Hat;
