import * as React from 'react';
import Svg, {
	Path,
} from 'react-native-svg';

function InvertedComma(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 19 15'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				opacity={0.3}
				d='M0 15v-4.292c0-1.234.224-2.517.673-3.85A16.714 16.714 0 012.548 3.05C3.35 1.844 4.248.827 5.24 0l3.425 2.293a23.054 23.054 0 00-2.018 3.913c-.53 1.347-.788 2.833-.775 4.46V15H0zm10.336 0v-4.292c0-1.234.224-2.517.673-3.85a16.717 16.717 0 011.875-3.808C13.686 1.844 14.583.827 15.575 0L19 2.293a23.048 23.048 0 00-2.018 3.913c-.53 1.347-.788 2.833-.775 4.46V15h-5.871z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default InvertedComma;
