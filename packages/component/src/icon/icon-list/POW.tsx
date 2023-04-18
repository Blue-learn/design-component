import * as React from 'react';
import Svg, {
	Path,
	Rect,
} from 'react-native-svg';

function POW(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Rect
				x={3.01265}
				y={3.01265}
				width={7.34175}
				height={7.34175}
				rx={3.67087}
				stroke={props.color}
				strokeWidth={2.02531}
			/>
			<Path
				d='M12.633 3.266c0-.7.567-1.266 1.266-1.266h5.57A2.532 2.532 0 0122 4.532v5.57c0 .698-.567 1.265-1.266 1.265h-7.468a.633.633 0 01-.633-.633V3.266zM12.633 13.268c0-.35.283-.633.633-.633h7.468c.7 0 1.266.567 1.266 1.266v5.57a2.532 2.532 0 01-2.532 2.531h-5.57c-.698 0-1.265-.567-1.265-1.266v-7.468zM2 13.9c0-.698.567-1.265 1.266-1.265h7.468c.35 0 .633.283.633.633v7.468c0 .7-.567 1.266-1.266 1.266h-5.57A2.532 2.532 0 012 19.47V13.9z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default POW;
