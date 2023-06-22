import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function HeartOutline(props) {
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
				d='M11.385 4.43919L12.0001 5.11195L12.6151 4.43919C14.5724 2.29819 17.712 2.29801 19.6692 4.43889C21.6658 6.62286 21.6658 10.1921 19.6692 12.3761L13.2301 19.4195C12.5693 20.1423 11.4308 20.1423 10.77 19.4195L4.3308 12.3764C2.33418 10.1924 2.33418 6.62313 4.33078 4.43916C6.28803 2.29824 9.42777 2.29824 11.385 4.43919Z'
				stroke={props.color}
				strokeWidth={1.5}
			/>
		</Svg>
	);
}

export default HeartOutline;
