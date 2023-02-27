import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

function ExternalLink(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<G clipPath='url(#clip0_1455_5059)'>
				<Path
					d='M12.433 8.472H8.3c-1.414 0-2.122 0-2.56.439-.44.44-.44 1.146-.44 2.56v5.514c0 1.415 0 2.122.44 2.561.438.44 1.146.44 2.56.44h5.513c1.415 0 2.122 0 2.561-.44.44-.44.44-1.146.44-2.56v-4.26'
					stroke={props.color}
					strokeWidth={1.5}
					strokeLinecap='round'
				/>
				<Path
					d='M10.53 13.693a.75.75 0 101.051 1.07l-1.05-1.07zm10.878-8.886a.75.75 0 00-.743-.757l-6.75-.061a.75.75 0 00-.014 1.5l6 .054-.055 6a.75.75 0 101.5.014l.062-6.75zm-9.827 9.957l9.602-9.429-1.05-1.07-9.603 9.428 1.051 1.07z'
					fill={props.color}
				/>
			</G>
		</Svg>
	);
}

export default ExternalLink;
