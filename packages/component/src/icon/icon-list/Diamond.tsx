import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Diamond(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 21 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M10.324 17.285h.672c.112-.688.416-1.44.928-2.256 1.024-1.616 3.088-3.2 4.864-3.568v-.672c-.88-.192-1.744-.592-2.576-1.184-1.696-1.2-2.944-2.992-3.216-4.608h-.672c-.16.848-.528 1.664-1.104 2.496-1.136 1.648-2.912 2.864-4.72 3.296v.672c.912.192 1.84.64 2.752 1.328 1.856 1.392 2.832 3.12 3.072 4.496z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Diamond;
