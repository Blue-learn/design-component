import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Refresh(props) {
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
				d='M12 20C9.76667 20 7.875 19.225 6.325 17.675C4.775 16.125 4 14.2333 4 12C4 9.76667 4.775 7.875 6.325 6.325C7.875 4.775 9.76667 4 12 4C13.15 4 14.25 4.23767 15.3 4.713C16.35 5.18767 17.25 5.86667 18 6.75V5C18 4.71667 18.096 4.479 18.288 4.287C18.4793 4.09567 18.7167 4 19 4C19.2833 4 19.5207 4.09567 19.712 4.287C19.904 4.479 20 4.71667 20 5V10C20 10.2833 19.904 10.5207 19.712 10.712C19.5207 10.904 19.2833 11 19 11H14C13.7167 11 13.4793 10.904 13.288 10.712C13.096 10.5207 13 10.2833 13 10C13 9.71667 13.096 9.479 13.288 9.287C13.4793 9.09567 13.7167 9 14 9H17.2C16.6667 8.06667 15.9377 7.33333 15.013 6.8C14.0877 6.26667 13.0833 6 12 6C10.3333 6 8.91667 6.58333 7.75 7.75C6.58333 8.91667 6 10.3333 6 12C6 13.6667 6.58333 15.0833 7.75 16.25C8.91667 17.4167 10.3333 18 12 18C13.15 18 14.2127 17.6957 15.188 17.087C16.1627 16.479 16.8917 15.6667 17.375 14.65C17.4583 14.4667 17.596 14.3127 17.788 14.188C17.9793 14.0627 18.175 14 18.375 14C18.7583 14 19.046 14.1333 19.238 14.4C19.4293 14.6667 19.45 14.9667 19.3 15.3C18.6667 16.7167 17.6917 17.854 16.375 18.712C15.0583 19.5707 13.6 20 12 20Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Refresh;
