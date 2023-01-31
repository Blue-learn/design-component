import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

function NorthWestArrow(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<G clipPath='url(#clip0_4190_19110)'>
				<Path
					d='M16.243 17.656L7.857 9.27l-.516 5.65a1.002 1.002 0 01-1.994-.185l.707-7.778a1.19 1.19 0 01.042-.17c.035-.035.057-.056.043-.14a1 1 0 01.205-.305 1 1 0 01.304-.205c.035-.035.056-.057.141-.042a1.19 1.19 0 01.17-.043l7.778-.707a1 1 0 011.089.905 1 1 0 01-.905 1.09l-5.65.515 8.386 8.387a1 1 0 01-1.414 1.414z'
					fill={props.color}
				/>
			</G>
		</Svg>
	);
}

export default NorthWestArrow;
