import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DocumentFilled(props) {
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
				d='M6.143 21.998h11.718a1.76 1.76 0 001.757-1.757V7.859h-4.1a1.76 1.76 0 01-1.758-1.757V2H6.143a1.76 1.76 0 00-1.757 1.757v16.483c0 .969.788 1.757 1.757 1.757zm2.344-11.756h7.03a.585.585 0 110 1.172h-7.03a.586.586 0 110-1.172zm0 2.343h7.03a.585.585 0 110 1.172h-7.03a.586.586 0 110-1.172zm0 2.344h7.03a.585.585 0 110 1.172h-7.03a.586.586 0 110-1.172zm0 2.343h4.687a.586.586 0 110 1.172H8.487a.586.586 0 110-1.172z'
				fill={props.color}
			/>
			<Path
				d='M15.164 7.217h3.383l-3.91-3.91V6.69c0 .291.236.527.527.527z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default DocumentFilled;
