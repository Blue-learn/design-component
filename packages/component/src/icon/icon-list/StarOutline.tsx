import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function StarOutline(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 14 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M13.489 5.524h0a.245.245 0 01-.072.262h0l-3.055 2.678-.223.196.065.29.9 3.967a.245.245 0 01-.095.254h0a.242.242 0 01-.267.012h-.002l-3.484-2.084L7 10.946l-.256.153-3.486 2.083h0a.242.242 0 01-.268-.011.245.245 0 01-.095-.254s0 0 0 0l.9-3.967.066-.29-.223-.196L.583 5.786v-.001a.245.245 0 01.14-.43s0 0 0 0l4.04-.366.297-.027.117-.274L6.774.949s0 0 0 0a.245.245 0 01.452 0s0 0 0 0l1.597 3.739.117.274.297.027 4.04.367h.001c.098.009.18.074.21.168z'
				stroke={props.color}
				strokeWidth={0.998073}
			/>
		</Svg>
	);
}

export default StarOutline;
