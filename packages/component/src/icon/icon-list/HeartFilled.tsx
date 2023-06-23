import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function HeartFilled(props) {
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
				d='M12.0001 3.87691C9.71242 1.37456 6.00339 1.37455 3.71573 3.87688C1.42808 6.37921 1.42809 10.4363 3.71576 12.9386L10.1549 19.9818C11.1461 21.066 12.854 21.0659 13.8452 19.9817L20.2843 12.9383C22.5719 10.436 22.5719 6.37893 20.2843 3.87661C17.9966 1.37427 14.2877 1.37456 12.0001 3.87691Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default HeartFilled;
