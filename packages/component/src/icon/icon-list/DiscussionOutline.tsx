import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DiscussionOutline(props) {
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
				d='M16.25 10a7.25 7.25 0 01-10.59 6.437 1.323 1.323 0 00-.554-.136 2.773 2.773 0 00-.483.028c-.317.043-.678.13-1.04.234-.566.162-1.187.38-1.736.587.206-.552.423-1.176.584-1.745.103-.364.189-.728.23-1.048.021-.16.034-.326.026-.487a1.344 1.344 0 00-.136-.553A7.25 7.25 0 1116.25 10z'
				stroke={props.color}
				strokeWidth={1.5}
			/>
			<Path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M10.625 18.807a8.577 8.577 0 01-1.955.086A7.987 7.987 0 0015 22c1.33 0 2.583-.324 3.686-.898.385-.2 1.72.207 2.887.633l.011.004a27.361 27.361 0 01.747.282c.422.166.857-.269.693-.691a35.57 35.57 0 01-.28-.747l-.005-.012c-.423-1.171-.828-2.515-.624-2.91a8.004 8.004 0 00-4.864-11.34c.25.578.443 1.187.57 1.821A6.5 6.5 0 0121.5 14c0 1.074-.26 2.084-.718 2.973a2.091 2.091 0 00-.218.862c-.01.22.007.434.03.62.05.37.146.774.253 1.153.03.109.063.219.097.33a15.484 15.484 0 00-.32-.096 8.391 8.391 0 00-1.146-.256 3.51 3.51 0 00-.616-.034c-.197.009-.53.043-.868.22A6.466 6.466 0 0115 20.5a6.477 6.477 0 01-4.375-1.693z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default DiscussionOutline;
