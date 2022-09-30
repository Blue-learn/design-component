import * as React from 'react';
import Svg, {
	G,
	Path,
	Defs,
	ClipPath,
	Rect,
} from 'react-native-svg';

function CheckFilled(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<G clipPath='url(#clip0_3136_13855)'>
				<Path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M24 0H0v24h24V0zm-4.498 8.557a.75.75 0 10-1.004-1.114l-9.47 8.524L4.53 11.47a.75.75 0 00-1.06 1.06l5 5a.75.75 0 001.032.027l10-9z'
					fill={props.color}
				/>
			</G>
			<Defs>
				<ClipPath id='clip0_3136_13855'>
					<Rect
						width={24}
						height={24}
						rx={12}
						fill='#fff'
					/>
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default CheckFilled;
