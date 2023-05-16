import * as React from 'react';
import Svg, {
	G,
	Path,
	Rect,
} from 'react-native-svg';

function POWRequested(props) {
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
				d='M10.25 6.5C10.25 8.57 8.57 10.25 6.5 10.25C4.43 10.25 2.75 8.57 2.75 6.5C2.75 4.43 4.43 2.75 6.5 2.75C8.57 2.75 10.25 4.43 10.25 6.5Z'
				stroke={props.color}
				strokeWidth={0.6}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M7.89133 7.69241L6.72883 6.99866C6.52633 6.87866 6.36133 6.58991 6.36133 6.35366V4.81616'
				stroke={props.color}
				strokeWidth={0.6}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default POWRequested;
