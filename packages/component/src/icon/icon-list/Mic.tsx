import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Mic(props) {
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
				d='M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm6.15-3c-.47 0-.842.383-.92.846-.425 2.542-2.738 4.254-5.23 4.254-2.492 0-4.805-1.712-5.23-4.254-.078-.463-.45-.846-.92-.846-.47 0-.856.383-.793.848.366 2.733 2.477 4.96 5.1 5.692.478.133.843.547.843 1.042V20a1 1 0 102 0v-1.416c0-.496.367-.91.845-1.042 2.624-.726 4.733-2.954 5.099-5.694.062-.466-.325-.848-.794-.848z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Mic;
