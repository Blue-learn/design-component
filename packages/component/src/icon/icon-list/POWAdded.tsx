import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function POWAdded(props) {
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
				d='M12.6328 3.26582C12.6328 2.56672 13.1995 2 13.8986 2H19.4682C20.8664 2 21.9999 3.13345 21.9999 4.53164V10.1012C21.9999 10.8003 21.4331 11.3671 20.734 11.3671H13.2657C12.9162 11.3671 12.6328 11.0837 12.6328 10.7341V3.26582Z'
				fill={props.color}
			/>
			<Path
				d='M12.6328 13.2679C12.6328 12.9184 12.9162 12.635 13.2657 12.635H20.7341C21.4331 12.635 21.9999 13.2017 21.9999 13.9008V19.4704C21.9999 20.8686 20.8664 22.0021 19.4682 22.0021H13.8986C13.1995 22.0021 12.6328 21.4353 12.6328 20.7362V13.2679Z'
				fill={props.color}
			/>
			<Path
				d='M2 13.9008C2 13.2017 2.56673 12.635 3.26582 12.635H10.7341C11.0837 12.635 11.3671 12.9184 11.3671 13.2679V20.7362C11.3671 21.4353 10.8003 22.0021 10.1012 22.0021H4.53164C3.13345 22.0021 2 20.8686 2 19.4704V13.9008Z'
				fill={props.color}
			/>
			<Path
				d='M9.5 4.25L5.375 8.375L3.5 6.5'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default POWAdded;
