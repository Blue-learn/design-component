import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Lock(props) {
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
				fillRule='evenodd'
				clipRule='evenodd'
				d='M17.25 9.42857V7.31357C17.248 6.17006 16.7172 5.07388 15.7738 4.26529C14.8305 3.45671 13.5516 3.0017 12.2175 3H11.7825C10.4484 3.0017 9.16952 3.45671 8.22618 4.26529C7.28283 5.07388 6.75198 6.17006 6.75 7.31357V9.42857C6.15326 9.42857 5.58097 9.63176 5.15901 9.99344C4.73705 10.3551 4.5 10.8457 4.5 11.3571V17.3357C4.50198 18.307 4.95302 19.2381 5.75431 19.9249C6.5556 20.6117 7.64181 20.9983 8.775 21H15.225C16.3582 20.9983 17.4444 20.6117 18.2457 19.9249C19.047 19.2381 19.498 18.307 19.5 17.3357V11.3571C19.5 10.8457 19.2629 10.3551 18.841 9.99344C18.419 9.63176 17.8467 9.42857 17.25 9.42857ZM8.25 7.31358C8.25 6.51054 8.62217 5.74039 9.28465 5.17256C9.94712 4.60473 10.8456 4.28572 11.7825 4.28572H12.2175C13.1544 4.28572 14.0529 4.60473 14.7154 5.17256C15.3778 5.74039 15.75 6.51054 15.75 7.31358V9.42858H8.25V7.31358Z'
				fill={props.color}
			/>
			<Path
				d='M12.75 15.0345V17.1431C12.75 17.3136 12.671 17.4771 12.5303 17.5976C12.3897 17.7182 12.1989 17.7859 12 17.7859C11.8011 17.7859 11.6103 17.7182 11.4697 17.5976C11.329 17.4771 11.25 17.3136 11.25 17.1431V15.0345C10.964 14.893 10.7405 14.6745 10.6142 14.4131C10.4878 14.1516 10.4656 13.8616 10.5511 13.5883C10.6366 13.3149 10.8249 13.0733 11.0869 12.901C11.3488 12.7287 11.6698 12.6353 12 12.6353C12.3302 12.6353 12.6512 12.7287 12.9131 12.901C13.1751 13.0733 13.3634 13.3149 13.4489 13.5883C13.5344 13.8616 13.5122 14.1516 13.3858 14.4131C13.2595 14.6745 13.036 14.893 12.75 15.0345Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Lock;
