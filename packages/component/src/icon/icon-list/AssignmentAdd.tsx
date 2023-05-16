import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function AssignmentAdd(props) {
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
				d='M12.001 2C10.695 2 9.584 2.835 9.172 4H6.5C5.837 4 5.201 4.263 4.732 4.732C4.263 5.201 4 5.837 4 6.5V19.5C4 20.881 5.119 22 6.5 22H17.501C18.88 22 20.001 20.881 20.001 19.5V6.5C20.001 5.837 19.737 5.201 19.267 4.732C18.798 4.263 18.164 4 17.501 4H14.829C14.417 2.835 13.306 2 12.001 2ZM12.8789 11.1211H16.1211C16.6065 11.1211 17 11.5146 17 12C17 12.4854 16.6065 12.8789 16.1211 12.8789H12.8789V16.1211C12.8789 16.6065 12.4854 17 12 17C11.5146 17 11.1211 16.6065 11.1211 16.1211V12.8789H7.87891C7.3935 12.8789 7 12.4854 7 12C7 11.5146 7.3935 11.1211 7.87891 11.1211H11.1211V7.87891C11.1211 7.3935 11.5146 7 12 7C12.4854 7 12.8789 7.3935 12.8789 7.87891V11.1211Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default AssignmentAdd;
