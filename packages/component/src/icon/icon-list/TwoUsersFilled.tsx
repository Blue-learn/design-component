import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function TwoUsersFilled(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 14 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M4.9 5.6a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2zm5.25.7a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm-9.02 5.2a.857.857 0 01-.398-.823 4.201 4.201 0 018.335 0 .856.856 0 01-.399.822 6.966 6.966 0 01-3.768 1.1 6.967 6.967 0 01-3.77-1.1zm9.02-.3h-.075c.05-.208.062-.428.034-.653a5.23 5.23 0 00-1.112-2.629 3.151 3.151 0 014.112 1.846.573.573 0 01-.252.686 5.226 5.226 0 01-2.707.75z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default TwoUsersFilled;
