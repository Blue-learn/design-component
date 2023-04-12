import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DiscussionFilled(props) {
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
				d='M17 10a8 8 0 01-11.686 7.102c-.473-.246-2.378.424-3.645.92-.422.165-.857-.27-.693-.692.493-1.27 1.16-3.183.909-3.67A8 8 0 1117 10z'
				fill={props.color}
			/>
			<Path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M9.273 18.914c4.82 0 8.727-4.01 8.727-8.957a9.127 9.127 0 00-.749-3.636 8.004 8.004 0 014.864 11.34c-.25.485.416 2.398.91 3.669.163.422-.272.857-.694.692-1.267-.496-3.172-1.166-3.645-.92A7.965 7.965 0 0115 22a7.987 7.987 0 01-6.33-3.107c.2.014.4.02.603.02z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default DiscussionFilled;
