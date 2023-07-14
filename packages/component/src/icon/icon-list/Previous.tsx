import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Previous(props) {
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
				d='M3.29211 9.63699L9.47975 4.20896C10.0214 3.73378 10.875 4.11953 10.875 4.85767V7.71671C16.5221 7.78238 21 8.93213 21 14.3688C21 16.5631 19.6085 18.7369 18.0703 19.8735C17.5903 20.2282 16.9063 19.783 17.0832 19.2081C18.6774 14.0291 16.3271 12.6542 10.875 12.5744V15.7143C10.875 16.4536 10.0207 16.8376 9.47975 16.363L3.29211 10.9344C2.90289 10.5929 2.90237 9.97895 3.29211 9.63699Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Previous;
