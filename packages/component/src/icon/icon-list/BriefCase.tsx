import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function BriefCase(props) {
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
				d="M6.667 18.333h6.666c3.35 0 3.95-1.341 4.125-2.975l.625-6.666C18.308 6.658 17.725 5 14.167 5H5.833C2.275 5 1.692 6.658 1.917 8.692l.625 6.666c.175 1.634.775 2.975 4.125 2.975zM6.667 5v-.667c0-1.475 0-2.666 2.666-2.666h1.334c2.666 0 2.666 1.191 2.666 2.666V5"
				stroke={props.color}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M11.667 10.833v.85c0 .909-.009 1.65-1.667 1.65-1.65 0-1.667-.733-1.667-1.641v-.859c0-.833 0-.833.834-.833h1.666c.834 0 .834 0 .834.833zM18.042 9.167a13.738 13.738 0 01-6.375 2.516"
				stroke={props.color}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M2.183 9.392a13.57 13.57 0 006.15 2.3"
				stroke={props.color}
				strokeWidth={1.5}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}

export default BriefCase;
