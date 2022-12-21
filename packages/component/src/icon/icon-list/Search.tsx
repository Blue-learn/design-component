import * as React from 'react';
import Svg, {
	Path,
	G,
	Defs,
	ClipPath,
} from 'react-native-svg';

function SearchIcon(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<G clipPath='url(#clip0_3859_17954)'>
				<Path
					d='M21.671 20.094l-3.776-3.765a8.797 8.797 0 001.877-5.443 8.886 8.886 0 10-8.886 8.886 8.797 8.797 0 005.443-1.877l3.765 3.776a1.11 1.11 0 001.577 0 1.11 1.11 0 000-1.577zm-17.45-9.208a6.665 6.665 0 1113.33 0 6.665 6.665 0 01-13.33 0z'
					fill={props.color}
				/>
			</G>
			<Defs>
				<ClipPath id='clip0_3859_17954'>
					<Path fill='#fff' d='M0 0H24V24H0z' />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default SearchIcon;
