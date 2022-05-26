import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Cake(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M1.667 18.333h16.666M2.592 18.333v-7.5c0-1.383 1.241-2.5 2.775-2.5h9.258c1.533 0 2.775 1.117 2.775 2.5v7.5"
				stroke={props.color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M4.633 8.333V5.975c0-1 .9-1.808 2.017-1.808h6.708c1.109 0 2.009.808 2.009 1.808v2.358M2.942 11.65l.308.008a1.122 1.122 0 011.108 1.125v.275a1.126 1.126 0 002.25 0V12.8a1.126 1.126 0 012.25 0v.258a1.126 1.126 0 002.25 0V12.8a1.126 1.126 0 012.25 0v.258a1.126 1.126 0 002.25 0V12.8c0-.617.5-1.125 1.125-1.125h.375"
				stroke={props.color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M6.667 4.167V2.5M13.333 4.167V2.5M10 4.167v-2.5"
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}

export default Cake;
