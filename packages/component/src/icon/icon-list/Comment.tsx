import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Comment(props) {
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
				d='M23 22.999H12.018A10.998 10.998 0 1123 11.309V23zM12.018 2.835a9.166 9.166 0 000 18.33h9.15v-9.769a9.183 9.183 0 00-9.15-8.561z'
				fill={props.color}
			/>
			<Path
				d='M12.918 7.417H7.42v1.834h5.5V7.417zM16.585 11.084H7.419v1.833h9.166v-1.833zM16.585 14.75H7.419v1.833h9.166V14.75z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Comment;
