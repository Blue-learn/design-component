import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Sparkling(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M4.5.75l.994 1.818 1.819.994-1.819.995L4.5 6.375l-.994-1.818-1.818-.995 1.818-.994L4.5.75zM8.438 5.438L9.1 6.65l1.213.662-1.213.663-.662 1.213-.664-1.213-1.212-.662 1.212-.663.663-1.213zM4.5 9.375l.332.606.606.332-.606.331-.332.606-.332-.606-.606-.332.607-.331.331-.606z'
				fill='#F9BE19'
			/>
		</Svg>
	);
}

export default Sparkling;
