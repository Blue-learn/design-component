import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function StarOutline(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M15.181 6.05h0l-4.618-.42-.297-.026-.117-.274-1.825-4.273s0 0 0 0a.352.352 0 00-.647 0L5.85 5.33l-.117.274-.297.027-4.618.42s0 0 0 0a.351.351 0 00-.2.614v.001L4.11 9.727l.224.196-.066.29-1.03 4.534s0 0 0 0a.351.351 0 00.522.38h0l3.984-2.38.256-.154.256.153 3.982 2.381h.001c.12.073.27.067.385-.016h0a.352.352 0 00.137-.364l2.42-8.697zm0 0a.35.35 0 01.303.241l.474-.153-.474.154a.352.352 0 01-.104.374h0l-3.49 3.061-.224.196.066.29 1.029 4.534 2.42-8.697z'
				stroke={props.color}
				strokeWidth={0.998073}
			/>
		</Svg>
	);
}

export default StarOutline;
