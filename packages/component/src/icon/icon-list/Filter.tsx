import * as React from 'react';
import Svg, {
	Path,
	G,
	Defs,
	ClipPath,
} from 'react-native-svg';

function Filter(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<G clipPath='url(#clip0_3031_11081)'>
				<Path
					d='M10.5 18h-3A1.5 1.5 0 016 16.5v-5.693L.442 5.25A1.5 1.5 0 010 4.192V1.5A1.5 1.5 0 011.5 0h15A1.5 1.5 0 0118 1.5v2.692a1.5 1.5 0 01-.442 1.058L12 10.807V16.5a1.5 1.5 0 01-1.5 1.5zm-9-16.5v2.692l6 6V16.5h3v-6.307l6-6V1.5h-15z'
					fill={props.color}
				/>
			</G>
			<Defs>
				<ClipPath id='clip0_3031_11081'>
					<Path fill={props.color} d='M0 0H18V18H0z' />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default Filter;
