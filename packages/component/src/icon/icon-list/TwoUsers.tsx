import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function TwoUsers(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 16 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M6.106 7.746a1.211 1.211 0 00-.22 0 2.947 2.947 0 01-2.847-2.953c0-1.633 1.32-2.96 2.96-2.96a2.957 2.957 0 01.107 5.913zM10.938 3.167A2.332 2.332 0 0113.272 5.5c0 1.26-1 2.287-2.247 2.334a.752.752 0 00-.173 0M2.772 10.207c-1.613 1.08-1.613 2.84 0 3.913 1.834 1.227 4.84 1.227 6.674 0 1.613-1.08 1.613-2.84 0-3.913-1.827-1.22-4.833-1.22-6.673 0zM12.227 13.833c.48-.1.933-.293 1.306-.58 1.04-.78 1.04-2.067 0-2.847a3.315 3.315 0 00-1.286-.573'
				stroke={props.color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default TwoUsers;
