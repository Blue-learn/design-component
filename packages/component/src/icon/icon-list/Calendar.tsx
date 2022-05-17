import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Calendar(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M6 1v3M14 1v3M1.5 8.09h17M18.5 7.5V16c0 1.423-.356 2.533-1.054 3.285-.692.745-1.791 1.215-3.446 1.215H6c-1.655 0-2.754-.47-3.446-1.215C1.856 18.533 1.5 17.423 1.5 16V7.5c0-1.423.356-2.533 1.054-3.285C3.246 3.47 4.345 3 6 3h8c1.655 0 2.754.47 3.446 1.215.698.752 1.054 1.862 1.054 3.285z"
				stroke={props.color}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M13.895 13.5h.009-.01z"
				/>
			<Path
				d="M13.895 12.5a1 1 0 100 2v-2zm.009 2a1 1 0 100-2v2zm-.01 0h.01v-2h-.01v2z"
				fill={props.color}
				mask="url(#a)"
			/>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M10.196 13.5h.009-.01z"
				/>
			<Path
				d="M10.196 12.5a1 1 0 100 2v-2zm.009 2a1 1 0 000-2v2zm-.01 0h.01v-2h-.01v2z"
				fill={props.color}
				mask="url(#b)"
			/>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.495 13.5h.008-.008z"
				/>
			<Path
				d="M6.495 12.5a1 1 0 100 2v-2zm.008 2a1 1 0 100-2v2zm-.008 0h.008v-2h-.008v2z"
				fill={props.color}
				mask="url(#c)"
			/>
		</Svg>
	)
}

export default Calendar;
