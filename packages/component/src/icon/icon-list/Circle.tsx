import * as React from 'react';
import Svg, {
	G,
	Rect,
	Defs,
} from 'react-native-svg';

function SvgComponent(props) {
	return (
		<Svg
			width={24}
			height={24}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<G filter='url(#filter0_d_3080_11331)'>
				<Rect
					x={2.5}
					y={1.5}
					width={19}
					height={19}
					rx={9.5}
					stroke={props.color}
				/>
			</G>
			<Defs></Defs>
		</Svg>
	);
}

export default SvgComponent;
