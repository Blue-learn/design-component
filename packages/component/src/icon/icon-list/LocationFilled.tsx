import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function LocationFilled(props) {
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
				d='M12 3C8.14067 3 5 6.0495 5 9.79875C5 15.126 11.342 20.6265 11.6119 20.8575C11.7231 20.9527 11.8616 21 12 21C12.1384 21 12.2769 20.9527 12.3881 20.8582C12.658 20.6265 19 15.126 19 9.79875C19 6.0495 15.8593 3 12 3ZM12 13.5C9.85567 13.5 8.11111 11.8177 8.11111 9.75C8.11111 7.68225 9.85567 6 12 6C14.1443 6 15.8889 7.68225 15.8889 9.75C15.8889 11.8177 14.1443 13.5 12 13.5Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default LocationFilled;
