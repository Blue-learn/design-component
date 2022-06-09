import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function NewsPaper(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M5.313 2.148v11.485H2.949v5.781h13.34a3.125 3.125 0 003.125-3.125V2.15A1.563 1.563 0 0017.852.585H6.875a1.562 1.562 0 00-1.563 1.562z'
				fill='#C5C8D2'
			/>
			<Path
				d='M2.148 5.313h3.164V17.05a2.363 2.363 0 11-4.726 0V6.875a1.562 1.562 0 011.562-1.563z'
				fill='#A94829'
			/>
			<Path
				d='M8.066 6.68h5.47a.586.586 0 000-1.172h-5.47a.586.586 0 000 1.172zM16.66 9.185H8.066a.586.586 0 100 1.171h8.594a.586.586 0 100-1.171zM16.66 13.32H8.066a.586.586 0 100 1.172h8.594a.586.586 0 100-1.172z'
				fill='#656A83'
			/>
		</Svg>
	);
}

export default NewsPaper;
