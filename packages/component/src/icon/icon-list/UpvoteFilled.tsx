import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function UpvoteFilled(props) {
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
				d='M22.3241 17.7086L14.2836 3.74788C14.0463 3.32032 13.6943 2.96779 13.2674 2.73024C12.0044 2.02748 10.4117 2.48308 9.70992 3.74788L1.55048 17.9101C1.3204 18.3092 1.19948 18.7621 1.2 19.223C1.20159 20.6699 2.37417 21.8416 3.81903 21.84H20.1379L20.2111 21.8308C21.6416 21.8158 22.7949 20.6528 22.7997 19.2201C22.8077 18.6781 22.6409 18.148 22.3241 17.7086Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default UpvoteFilled;
