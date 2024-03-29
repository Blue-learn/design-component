import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function QuestionMark(props) {
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
				d='M11.4384 16.6044C11.0808 16.6044 10.7916 16.3152 10.7916 15.9576C10.7916 15.1116 10.9116 14.3808 11.1504 13.7664C11.3256 13.3032 11.61 12.8364 12.0012 12.3648C12.2892 12.0216 12.8052 11.52 13.5516 10.8624C14.298 10.2036 14.7828 9.67922 15.0072 9.28802C15.2316 8.89682 15.342 8.46962 15.342 8.00642C15.342 7.16762 15.0144 6.43202 14.3604 5.79722C13.7064 5.16242 12.9036 4.84562 11.9532 4.84562C11.0352 4.84562 10.2684 5.13362 9.654 5.70842C9.2052 6.12842 8.868 6.72122 8.6448 7.48682C8.4912 8.01242 7.9788 8.34842 7.4352 8.28362C6.7464 8.20202 6.2928 7.52042 6.4896 6.85442C6.792 5.83082 7.2984 5.00642 8.0076 4.38002C8.9928 3.50762 10.296 3.07202 11.9172 3.07202C13.6332 3.07202 15.0024 3.53882 16.0248 4.47362C17.0472 5.40842 17.5572 6.53762 17.5572 7.86242C17.5572 8.62922 17.3772 9.33602 17.0184 9.98162C16.6596 10.6284 15.9564 11.4144 14.9112 12.3408C14.2092 12.9636 13.7496 13.4232 13.5336 13.7184C13.3176 14.0136 13.158 14.3532 13.0548 14.736C12.978 15.0204 12.9252 15.438 12.8964 15.9864C12.8784 16.332 12.5916 16.6032 12.246 16.6032H11.4384V16.6044ZM10.6716 19.7004C10.6716 19.0224 11.2212 18.4728 11.8992 18.4728C12.5772 18.4728 13.1268 19.0224 13.1268 19.7004C13.1268 20.3784 12.5772 20.928 11.8992 20.928C11.2212 20.928 10.6716 20.3784 10.6716 19.7004Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default QuestionMark;
