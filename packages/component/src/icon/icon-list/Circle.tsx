import * as React from 'react';
import Svg, { G, Rect } from 'react-native-svg';

function SvgComponent(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<G filter='url(#filter0_d_10028_32340)'>
				<Rect
					x={2}
					y={1.99805}
					width={20}
					height={20}
					rx={10}
					fill={props.color}
				/>
				<Rect
					x={2.5}
					y={2.49805}
					width={19}
					height={19}
					rx={9.5}
					stroke={props.color}
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;
