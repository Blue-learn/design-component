import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function AddUser(props) {
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
				d='M3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37M12 12a5 5 0 100-10 5 5 0 000 10z'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M18 16.52v2.99M22 18c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0118 22a3.92 3.92 0 01-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0114 18a3.995 3.995 0 014-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67zm-2.51-.02h-2.98 2.98z'
				stroke={props.color}
				strokeWidth={1.5}
				strokeMiterlimit={10}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default AddUser;
