import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function UserClock(props) {
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
				d='M2.078 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37M10.668 12a5 5 0 100-10 5 5 0 000 10z'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M23.042 17.289c0 .377-.047.741-.141 1.095-.106.47-.295.93-.542 1.33A4.675 4.675 0 0118.332 22a4.617 4.617 0 01-3.133-1.213 4.338 4.338 0 01-.895-1.072 4.617 4.617 0 01-.683-2.425 4.704 4.704 0 014.71-4.71c1.39 0 2.65.6 3.498 1.565a4.692 4.692 0 011.213 3.145z'
				stroke={props.color}
				strokeMiterlimit={10}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M20.574 18.669l-2.686-.882-.052-.037.052-2.794'
				stroke={props.color}
				strokeMiterlimit={10}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M2.078 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37M10.668 12a5 5 0 100-10 5 5 0 000 10z'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M23.042 17.289c0 .377-.047.741-.141 1.095-.106.47-.295.93-.542 1.33A4.675 4.675 0 0118.332 22a4.617 4.617 0 01-3.133-1.213 4.338 4.338 0 01-.895-1.072 4.617 4.617 0 01-.683-2.425 4.704 4.704 0 014.71-4.71c1.39 0 2.65.6 3.498 1.565a4.692 4.692 0 011.213 3.145z'
				stroke={props.color}
				strokeMiterlimit={10}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M20.574 18.669l-2.686-.882-.052-.037.052-2.794'
				stroke={props.color}
				strokeMiterlimit={10}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default UserClock;
