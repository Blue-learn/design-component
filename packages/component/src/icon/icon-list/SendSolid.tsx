import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SendSolid(props) {
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
				d='M22.57 9.86L3.208 1.825a2.305 2.305 0 00-2.405.388 2.305 2.305 0 00-.729 2.325l1.724 6.759h8.438a.703.703 0 010 1.406H1.797l-1.724 6.76a2.305 2.305 0 00.729 2.324c.669.58 1.59.726 2.405.388l19.364-8.034A2.282 2.282 0 0024 12c0-.955-.548-1.776-1.43-2.141z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default SendSolid;
